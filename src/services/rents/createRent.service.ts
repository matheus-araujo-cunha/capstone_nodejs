import { Request } from "express";
import { Rent } from "../../entities/Rent";
import { IRent } from "../../interfaces/rent.interface";
import rentRepository from "../../repositories/rent.repository";
import AppDataSource from "../../data-source";
import { Item } from "../../entities/Item";
import { ErrorHandler } from "../../errors/error";
import { serializedCreateRentSchema } from "../../schemas";
import { getDiffBetweenDays } from "../../utils";

const createRentService = async ({ validated }: Request) => {
  const rentValidated = validated as IRent;
  const itemRepository = AppDataSource.getRepository(Item);

  const item = await itemRepository.findOneBy({
    itemUuid: rentValidated.itemId,
  });

  if (!item) {
    throw new ErrorHandler(404, "Item not found");
  }

  const { startDate, finishDate } = rentValidated;

  const daysToRent = getDiffBetweenDays(startDate, finishDate);

  const value = daysToRent * item.dailyPrice;

  const rent = new Rent();

  rent.item = item;
  rent.finishDate = rentValidated.finishDate;
  rent.startDate = rentValidated.startDate;
  rent.value = value;

  const rentCreated: Rent = await rentRepository.save(rent);

  return serializedCreateRentSchema.validate(rentCreated, {
    stripUnknow: true,
  });
};

export default createRentService;
