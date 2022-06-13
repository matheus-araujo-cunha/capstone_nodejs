import { User } from "../../src/entities/User";
import { IRent } from "../../src/interfaces/rent.interface";

declare global {
  namespace Express {
    interface Request {
      validated: IRent | IRentToUpdate;
      decoded: Partial<User>;
    }
  }
}
