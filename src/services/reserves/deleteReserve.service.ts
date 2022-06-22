import { Request } from "express";
import { reserveRepository } from "../../repositories/reserves";

const deleteReserveService = async ({ params }: Request) => {
  const { id } = params;
  await reserveRepository.delete(id);

  return {};
};

export default deleteReserveService;
