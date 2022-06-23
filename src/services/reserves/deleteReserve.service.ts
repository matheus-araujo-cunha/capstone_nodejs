import { Request } from "express";
import { ErrorHandler } from "../../errors/error";
import { reserveRepository } from "../../repositories/reserves";

const deleteReserveService = async ({ params }: Request) => {
  const { id } = params;

  const reserveToDelete = await reserveRepository.retrieve({ reserveUuid: id });

  if (!reserveToDelete) {
    throw new ErrorHandler(404, "Reserve not found");
  }

  await reserveRepository.delete(id);

  return {};
};

export default deleteReserveService;
