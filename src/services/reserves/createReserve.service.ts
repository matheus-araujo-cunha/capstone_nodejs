import { Request } from "express";
import { Reserve } from "../../entities/Reserve";
import { reserveRepository } from "../../repositories/reserves";
import { IReserveCreate } from "../../interfaces/reserve.interface";
import { serializedCreateReserveSchema } from "../../schemas/reserves";

const createReserveService = async ({ validated }: Request) => {
  
    const reserve = validated as IReserveCreate

    const reserveCreated: Reserve = await reserveRepository.save(reserve);

  return serializedCreateReserveSchema.validate(reserveCreated, {
    stripUnknow: true,
  });
};

export default createReserveService;