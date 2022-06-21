import { Request } from "express";
import { IReserveUpdate } from "../../interfaces/reserve.interface";
import { reserveRepository } from "../../repositories/reserves";

const updateReserveService = async ({ params, reserveToUpdate }: Request) => {
  const { id } = params;
  await reserveRepository.update(reserveToUpdate, id);

  const reserve = await reserveRepository.retrieve({ reserveUuid: id });

  return reserve;
};

export default updateReserveService;
