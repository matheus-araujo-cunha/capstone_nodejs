import { Request, Response } from "express";
import createReserveService from "../../services/reserves/createReserve.service";

const createReserveController = async (req: Request, res: Response) => {
  const reserve = await createReserveService(req);

  return res.status(201).json(reserve);
};

export default createReserveController;