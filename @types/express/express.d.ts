import {User} from "../../src/entities/User"

declare global {
  namespace Express {
    interface Request {
      user: User;
      validated: IRent | IRentToUpdate | User;
      decoded: Partial<User>;
    }
  }
}
