import { IRent } from "../../src/interfaces/rent.interface";

declare global {
  namespace Express {
    interface Request {
      validated: IRent;
    }
  }
}
