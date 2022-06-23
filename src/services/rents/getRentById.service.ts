import { Request } from "express";
import { ErrorHandler } from "../../errors/error";
import { rentRepository } from "../../repositories";
import { createRentSchema, serializedCreateRentSchema } from "../../schemas";

const getRentByIdService = async ({ params }: Request) => {
  const { id } = params;

  const rent = await rentRepository.retrieve({ rentUuid: id });

  if (!rent) {
    throw new ErrorHandler(404, "Rent not found");
  }

  return serializedCreateRentSchema.validate(rent, { stripUnknown: true });
};

export default getRentByIdService;
