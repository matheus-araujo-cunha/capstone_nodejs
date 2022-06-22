import { Rate } from "../../src/entities/Rate";
import { Item } from "../../src/entities/Item";
import { Reserve } from "../../src/entities/Reserve";
import { User } from "../../src/entities/User";
import {
  IRentCreate,
  IRentToUpdate,
} from "../../src/interfaces/rent.interface";
import {
  IReserveCreate,
  IReserveUpdate,
} from "../../src/interfaces/reserve.interface";

declare global {
  namespace Express {
    interface Request {
      user: User;
      validated:
        Partial<Rate>
        | IRentCreate
        | IRentToUpdate
        | User
        | Partial<Item>
        | IReserveCreate
        | IReserveUpdate;
      decoded: Partial<User>;
      item: Item;
      reserveToUpdate: Partial<Reserve>;
    }
  }
}
