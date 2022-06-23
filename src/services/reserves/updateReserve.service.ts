import { Request } from "express";
import { ErrorHandler } from "../../errors/error";
import { IReserveUpdate } from "../../interfaces/reserve.interface";
import { reserveRepository } from "../../repositories/reserves";

const updateReserveService = async ({ params, reserveToUpdate }: Request) => {
  const { id } = params;

  const findReserve = await reserveRepository.retrieve({ reserveUuid: id });

  if (!findReserve) {
    throw new ErrorHandler(404, "Reserve not found");
  }

  await reserveRepository.update(reserveToUpdate, id);

  const reserve = await reserveRepository.retrieve({ reserveUuid: id });

  return reserve;
};

export default updateReserveService;
