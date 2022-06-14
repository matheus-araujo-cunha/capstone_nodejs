
import { User } from "../../src/entities/User";
import { IRentCreate, IRentToUpdate } from "../../src/interfaces/rent.interface";

declare global {
  namespace Express {
    interface Request {
      user: User;
      validated: IRentCreate | IRentToUpdate | User;
      decoded: Partial<User>;
    }
  }
}
