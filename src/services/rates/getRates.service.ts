import { Request } from "express";
import { serializedGetRateSchema } from "../../schemas/rates/ratesSchema";
import { itemRepository } from "../../repositories";
import { ErrorHandler } from "../../errors/error";

const getRateByIdService = async ({ params }: Request) => {
  const { id } = params;
  const item = await itemRepository.retrieve({ itemUuid: id });

  if (!item) {
    throw new ErrorHandler(404, "Item not found");
  }

  const test = { ratings: item.rates };
  return serializedGetRateSchema.validate(test, { stripUnknown: true });
};
export default getRateByIdService;
