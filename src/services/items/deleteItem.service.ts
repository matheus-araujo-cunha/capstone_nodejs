import { Request } from "express";
import { itemRepository } from "../../repositories";
import rateRepository from "../../repositories/rates/rate.repository";

const deleteItemService = async ({ item }: Request) => {
  for (let index = 0; index < item.rates.length; index++) {
    const currentRate = item.rates[index];

    await rateRepository.delete(currentRate.rateUuid);
  }

  await itemRepository.delete(item.itemUuid);

  return {};
};

export default deleteItemService;
