import { Request } from "express";
import { itemRepository } from "../../repositories";

const deleteItemService = async ({ item }: Request) => {
  await itemRepository.delete(item.itemUuid);

  return {};
};

export default deleteItemService;
