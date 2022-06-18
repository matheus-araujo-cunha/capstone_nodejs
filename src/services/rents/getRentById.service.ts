import { Request } from "express";
import { rentRepository } from "../../repositories";
import { createRentSchema } from "../../schemas";

const getRentByIdService = async ({ params }: Request) => {
  const { id } = params;

  const rent = await rentRepository.retrieve({ rentUuid: id });

  return createRentSchema.validate(rent, { stripUnknown: true });
};

export default getRentByIdService;
