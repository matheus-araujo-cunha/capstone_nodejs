import { Item } from "../entities/Item";

interface IReserveCreate {
  startDate: string;
  finishDate: string;
  itemId: string;
}

interface IReserveUpdate {
  startDate?: string;
  finishDate?: string;
}

export { IReserveCreate, IReserveUpdate };
