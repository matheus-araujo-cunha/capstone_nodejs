import { Request, Response } from "express";
import updateRentService from "../../services/rents/updateRent.service";

const updateRentController = async (req: Request, res: Response) => {
  const rentUpdated = await updateRentService(req);

  return res.status(200).json(rentUpdated);
};

export default updateRentController;
