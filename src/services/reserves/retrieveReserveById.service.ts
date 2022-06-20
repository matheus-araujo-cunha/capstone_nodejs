import { Request } from "express";
import { reserveRepository } from "../../repositories/reserves";
import { createRentSchema } from "../../schemas";

const retrieveReserveByIdService = async ( req: Request) => {
  const { id } = req.params;

  const rent = await reserveRepository.retrieve({ rentUuid: id });

  return createRentSchema.validate(rent, { stripUnknown: true });
};

export default retrieveReserveByIdService;