import { Request } from "express";
import { ErrorHandler } from "../../errors/error";
import { IRentToUpdate } from "../../interfaces/rent.interface";
import { rentRepository } from "../../repositories";
import { createRentSchema } from "../../schemas";
import { getDiffBetweenDays } from "../../utils";

const updateRentService = async ({ params, validated }: Request) => {
  const { id } = params;

  let { finishDate, startDate } = validated as IRentToUpdate;

  const rentToUpdate = await rentRepository.retrieve({ rentUuid: id });

  if (!rentToUpdate) {
    throw new ErrorHandler(404, "Rent not found");
  }

  if (!finishDate) {
    finishDate = rentToUpdate?.finishDate as Date;
  }

  if (!startDate) {
    startDate = rentToUpdate?.startDate as Date;
  }

  const daysToRent = getDiffBetweenDays(
    startDate.toISOString(),
    finishDate.toISOString()
  );

  const value = daysToRent * rentToUpdate?.item.dailyPrice;

  const payload = { startDate, finishDate, value };

  await rentRepository.update(payload, id);

  const rentUpdated = await rentRepository.retrieve({ rentUuid: id });

  return createRentSchema.validate(rentUpdated, { stripUnknown: true });
};

export default updateRentService;
