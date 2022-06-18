import { itemRepository } from "../../repositories";
import { serializedGetItemsSchema } from "../../schemas/items";

const getAllItemsService = async () => {
  const items = await itemRepository.getAll();

  return serializedGetItemsSchema.validate(items, { stripUnknown: true });
};

export default getAllItemsService;
