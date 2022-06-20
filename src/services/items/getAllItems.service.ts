import { Request } from "express";
import { itemRepository } from "../../repositories";
import { serializedGetItemsSchema } from "../../schemas/items";
import AppDataSource from "../../data-source";
import { Reserve } from "../../entities/Reserve";
import { formatDate } from "../../utils";

const getAllItemsService = async ({ query }: Request) => {
  const reserveRepository = AppDataSource.getRepository(Reserve);

  const reserves = await reserveRepository.find();

  let { start, finish } = query;
  const items = await itemRepository.getAll();

  if (!start) {
    return serializedGetItemsSchema.validate(items, { stripUnknown: true });
  }

  start = formatDate(start as string);

  let reservesFiltered = [];

  if (!finish) {
    reservesFiltered = reserves.filter((reserve) => {
      const reserveStartTS = new Date(reserve.startDate).getTime();
      const queryStartTS = new Date(start as string).getTime();
      const reserveFinishTS = new Date(reserve.finishDate).getTime();

      return queryStartTS >= reserveStartTS && queryStartTS <= reserveFinishTS;
    });
  } else {
    finish = formatDate(finish as string);

    reservesFiltered = reserves.filter((reserve) => {
      const reserveStartTS = new Date(reserve.startDate).getTime();
      const queryStartTS = new Date(start as string).getTime();
      const queryFinishTS = new Date(finish as string).getTime();
      const reserveFinishTS = new Date(reserve.finishDate).getTime();

      const startCondition =
        queryStartTS >= reserveStartTS && queryStartTS <= reserveFinishTS;
      const finishCondition =
        queryFinishTS >= reserveStartTS && queryFinishTS <= reserveFinishTS;

      return startCondition || finishCondition;
    });
  }

  const idOfItemsInReserve = reservesFiltered.map(
    (reserve) => reserve.item.itemUuid
  );

  const idOfItems = items.map((item) => item.itemUuid);

  const filteredItems = idOfItemsInReserve.filter((itemReserve) => {
    return !idOfItems.includes(itemReserve);
  });

  return serializedGetItemsSchema.validate(filteredItems, {
    stripUnknown: true,
  });
};

export default getAllItemsService;
