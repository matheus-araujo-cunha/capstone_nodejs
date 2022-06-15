import { Request } from "express";
import { Item } from "../../entities/Item";
import { IItemCreate } from "../../interfaces/item.interface";
import { itemRepository } from "../../repositories";
import userRepositorie from "../../repositories/users/user.repositorie";
import { createItemSchema } from "../../schemas/items";

const registerItemService = async ({ validated, decoded }: Request) => {
  const itemValidated = validated as Partial<Item>;

  const { userUuid } = decoded;

  const user = await userRepositorie.retrieve({ userUuid });

  itemValidated.owner = user;

  const item = await itemRepository.save(itemValidated);

  return createItemSchema.validate(item, { stripUnknown: true });
};

export default registerItemService;
