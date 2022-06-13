import { Request, Response } from "express";
import deleteRentService from "../../services/rents/deleteRent.service";

const deleteRentController = async (req: Request, res: Response) => {
  await deleteRentService(req);

  return res.status(204).json({});
};

export default deleteRentController;
