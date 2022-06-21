import { Request } from "express";
import { Reserve } from "../../entities/Reserve";
import { reserveRepository } from "../../repositories/reserves";
import { IReserveCreate } from "../../interfaces/reserve.interface";
import { serializedCreateReserveSchema } from "../../schemas/reserves";
import { formatDate, getDiffBetweenDays } from "../../utils";

const createReserveService = async ({ validated, item, user }: Request) => {
  const reserve = validated as IReserveCreate;

  const { finishDate, startDate } = reserve;

  const formatedStartDate = new Date(formatDate(startDate));
  const formatedFinishDate = new Date(formatDate(finishDate));

  const reserveToCreate = new Reserve();
  const daysOfReserve = getDiffBetweenDays(
    formatedStartDate.toISOString(),
    formatedFinishDate.toISOString()
  );

  const totalValue = item.dailyPrice * (daysOfReserve * -1);

  reserveToCreate.item = item;
  reserveToCreate.startDate = new Date(formatDate(startDate));
  reserveToCreate.finishDate = new Date(formatDate(finishDate));
  reserveToCreate.value = totalValue;
  reserveToCreate.user = user;

  const reserveCreated: Reserve = await reserveRepository.save(reserveToCreate);

  return serializedCreateReserveSchema.validate(reserveCreated, {
    stripUnknow: true,
  });
};

export default createReserveService;
