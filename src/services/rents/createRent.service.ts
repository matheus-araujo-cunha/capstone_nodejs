import { Request } from "express";
import { Rent } from "../../entities/Rent";
import { IRentCreate } from "../../interfaces/rent.interface";
import { rentRepository, userRepository } from "../../repositories";
import AppDataSource from "../../data-source";
import { Item } from "../../entities/Item";
import { ErrorHandler } from "../../errors/error";
import { serializedCreateRentSchema } from "../../schemas";
import { getDiffBetweenDays } from "../../utils";
import { Reserve } from "../../entities/Reserve";

const createRentService = async ({ validated, decoded }: Request) => {
  const reserveValidated = validated as IRentCreate;
  const reserveRepository = AppDataSource.getRepository(Reserve);

  const reserve = await reserveRepository.findOneBy({
    reserveUuid: reserveValidated.reserveId,
  });

  const user = await userRepository.retrieve({ userUuid: decoded.userUuid });

  if (!reserve) {
    throw new ErrorHandler(404, "Reserve not found");
  }

  const rent = new Rent();

  rent.item = reserve.item;
  rent.finishDate = reserve.finishDate;
  rent.startDate = reserve.startDate;
  rent.value = reserve.value;
  rent.user = user;

  const rentCreated: Rent = await rentRepository.save(rent);

  return serializedCreateRentSchema.validate(rentCreated, {
    stripUnknow: true,
  });
};

export default createRentService;
