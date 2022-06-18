import { Request, Response } from "express";
import updateItemService from "../../services/items/updateItem.service";

const updateItemController = async (req: Request, res: Response) => {
  const itemUpdated = await updateItemService(req);

  return res.status(200).json(itemUpdated);
};

export default updateItemController;
