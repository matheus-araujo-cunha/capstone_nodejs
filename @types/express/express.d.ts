import { User } from "../../src/entities/User";
import { IRentCreate } from "../../src/interfaces/rent.interface";

declare global {
  namespace Express {
    interface Request {
      validated: IRentCreate | IRentToUpdate;
      decoded: Partial<User>;
    }
  }
}
