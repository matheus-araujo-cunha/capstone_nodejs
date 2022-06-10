import userCreateService from "../../services/users/userCreate.service"
import { Request,Response } from "express";
import { userWOPassword } from "../../utils";


const userCreateController= async(req:Request,res:Response)=>{
const newUser = await userCreateService(req)


return res.status(201).json(newUser)    
}
export default userCreateController