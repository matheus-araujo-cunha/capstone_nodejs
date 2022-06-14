import { Request, Response } from "express";
import listAllRentsUserService from "../../services/rents/listAllRentsUser.service";

const listAllRentsUserController = async (req: Request, res: Response) => {
  const listRent = await listAllRentsUserService(req);

  return res.status(200).json(listRent);
};

export default listAllRentsUserController;
