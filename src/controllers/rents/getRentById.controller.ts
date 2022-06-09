import { Request, Response } from "express";
import getRentByIdService from "../../services/rents/getRentById.service";

const getRentByIdController = async (req: Request, res: Response) => {
  const rent = await getRentByIdService(req);

  return res.status(200).json(rent);
};

export default getRentByIdController;
