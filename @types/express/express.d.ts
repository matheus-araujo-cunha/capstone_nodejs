import { Item } from "../../src/entities/Item";
import { User } from "../../src/entities/User";
import { IItemCreate } from "../../src/interfaces/item.interface";
import {
  IRentCreate,
  IRentToUpdate,
} from "../../src/interfaces/rent.interface";

declare global {
  namespace Express {
    interface Request {
      user: User;
      validated: IRentCreate | IRentToUpdate | User | Partial<Item>;
      decoded: Partial<User>;
      item: Item;
    }
  }
}
