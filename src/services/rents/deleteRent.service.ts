import { Request } from "express";
import rentRepository from "../../repositories/rent.repository";

const deleteRentService = async ({ params }: Request) => {
  const { id } = params;

  await rentRepository.delete(id);

  return {};
};

export default deleteRentService;
