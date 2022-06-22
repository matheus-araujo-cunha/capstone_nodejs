import { Request } from "express";
import { ErrorHandler } from "../../errors/error";
import { rentRepository } from "../../repositories";

const deleteRentService = async ({ params }: Request) => {
  const { id } = params;

  const rentToDelete = await rentRepository.retrieve({ rentUuid: id });

  if (!rentToDelete) {
    throw new ErrorHandler(404, "Rent not found");
  }

  await rentRepository.delete(id);

  return {};
};

export default deleteRentService;
