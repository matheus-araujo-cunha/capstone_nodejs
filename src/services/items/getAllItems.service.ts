import { Request } from "express";
import { itemRepository } from "../../repositories";
import { serializedGetItemsSchema } from "../../schemas/items";
import AppDataSource from "../../data-source";
import { Reserve } from "../../entities/Reserve";
import { formatDate } from "../../utils";
import { Item } from "../../entities/Item";

const getAllItemsService = async ({ query }: Request) => {
  const reserveRepository = AppDataSource.getRepository(Reserve);
  const itemRepository = AppDataSource.getRepository(Item);

  const reserves = await reserveRepository.find();

  let { start, finish, location } = query;

  let items = [];

  if (!!location) {
    const locationQuery = location as string;
    items = await itemRepository.find({ where: { location: locationQuery } });
  } else {
    items = await itemRepository.find();
  }

  if (!start && !finish) {
    return serializedGetItemsSchema.validate(items, { stripUnknown: true });
  }

  start = formatDate(start as string);
  finish = formatDate(finish as string);

  let reservesFiltered = [];

  const queryStartTS = new Date(start as string).getTime();
  const queryFinishTS = new Date(finish as string).getTime();

  reservesFiltered = reserves.filter((reserve) => {
    const reserveStartTS = new Date(reserve.startDate).getTime();
    const reserveFinishTS = new Date(reserve.finishDate).getTime();

    const startCondition =
      reserveStartTS >= queryStartTS && reserveStartTS <= queryFinishTS;
    const finishCondition =
      reserveFinishTS >= queryStartTS && reserveFinishTS <= queryFinishTS;

    return startCondition && finishCondition;
  });

  const idOfItemsInReserve = reservesFiltered.map(
    (reserve) => reserve.item.itemUuid
  );

  const idOfItems = items.map((item) => item.itemUuid);

  const filteredIds = idOfItemsInReserve.filter((itemReserve) => {
    return idOfItems.includes(itemReserve);
  });

  const filteredItems = items.filter(
    (item) => !filteredIds.includes(item.itemUuid)
  );

  return serializedGetItemsSchema.validate(filteredItems, {
    stripUnknown: true,
  });
};

export default getAllItemsService;
