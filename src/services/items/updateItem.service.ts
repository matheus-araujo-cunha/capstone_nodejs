import { Request } from "express";
import { Item } from "../../entities/Item";
import { ErrorHandler } from "../../errors/error";
import { itemRepository } from "../../repositories";
import { createItemSchema } from "../../schemas/items";

const updateItemService = async ({ item, validated }: Request) => {
  const itemValidated = validated as Partial<Item>;

  await itemRepository.update(item.itemUuid, { ...itemValidated });

  const itemUpdated = await itemRepository.retrieve({
    itemUuid: item.itemUuid,
  });

  return createItemSchema.validate(itemUpdated, { stripUnknown: true });
};

export default updateItemService;
