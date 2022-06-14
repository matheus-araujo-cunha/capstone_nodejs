import {Request, Response} from "express"
import { User } from "../../entities/User"
import { userGetByIdService } from "../../services/users/userGetById.service"



export const userGetByIdController = async (req:Request,res:Response)=>{
  const user = await userGetByIdService(req)

  return res.status(200).json(user)
}
