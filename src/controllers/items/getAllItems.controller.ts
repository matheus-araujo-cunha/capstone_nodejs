import { Request, Response } from "express";
import getAllItemsService from "../../services/items/getAllItems.service";

const getAllItemsController = async (req: Request, res: Response) => {

  const items = await getAllItemsService(req);

  return res.status(200).json(items);
};

export default getAllItemsController;
