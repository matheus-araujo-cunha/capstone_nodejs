import { Request, Response } from "express";
import getItemByIdService from "../../services/items/getItemById.controller";

const getItemByIdController = async (req: Request, res: Response) => {
  const item = await getItemByIdService(req);

  return res.status(200).json(item);
};
export default getItemByIdController;
