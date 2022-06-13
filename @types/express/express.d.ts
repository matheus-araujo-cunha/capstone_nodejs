import { IRentCreate } from "../../src/interfaces/rent.interface";

declare global {
  namespace Express {
    interface Request {
      validated: IRentCreate | IRentToUpdate;
    }
  }
}
