import { Request, Response } from "express";
import createRentService from "../../services/rents/createRent.service";

const createRentController = async (req: Request, res: Response) => {
  const rent = await createRentService(req);

  return res.status(201).json(rent);
};

export default createRentController;
