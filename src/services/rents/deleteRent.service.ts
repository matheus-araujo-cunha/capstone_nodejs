import { Request } from "express";
import { rentRepository } from "../../repositories";

const deleteRentService = async ({ params }: Request) => {
  const { id } = params;

  await rentRepository.delete(id);

  return {};
};

export default deleteRentService;
