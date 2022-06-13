import { Request,Response } from "express";
import { userWOPassword } from "../../utils/userWOpass.util";





const userByIdController = (req: Request, res: Response) => {
    return res.status(200).json(userWOPassword(req.user));
  };

export default userByIdController