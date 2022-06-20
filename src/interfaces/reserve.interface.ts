import { Item } from "../entities/Item";

interface IReserveCreate {
    value:number;
    startDate: Date;
    finishDate: Date;
    item:Item
  }
  
  interface IReserveUpdate {
    startDate?: Date;
    finishDate?: Date;
  }
  
  export { IReserveCreate, IReserveUpdate };
  