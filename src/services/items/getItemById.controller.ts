import { Request } from "express";
import { itemRepository } from "../../repositories";
import { createItemSchema } from "../../schemas/items";

const getItemByIdService = async ({ params }: Request) => {
  const { id } = params;

  const item = await itemRepository.retrieve({ itemUuid: id });

  return createItemSchema.validate(item, { stripUnknown: true });
};
export default getItemByIdService;
