import { Request, Response } from "express";
import updateReserveService from "../../services/reserves/updateReserve.service";

const updateReserveController = async (req: Request, res: Response) => {
  const reserveUpdated = await updateReserveService(req);

  return res.status(200).json(reserveUpdated);
};

export default updateReserveController;
