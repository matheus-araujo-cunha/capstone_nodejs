import { Request, Response } from "express";
import registerItemService from "../../services/items/registerItem.service";

const registerItemController = async (req: Request, res: Response) => {
  const item = await registerItemService(req);

  return res.status(201).json(item);
};

export default registerItemController;
