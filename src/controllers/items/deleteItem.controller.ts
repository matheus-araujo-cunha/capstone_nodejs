import { Request, Response } from "express";
import deleteItemService from "../../services/items/deleteItem.service";

const deleteItemController = async (req: Request, res: Response) => {
  const response = await deleteItemService(req);

  return res.status(204).json(response);
};

export default deleteItemController;
