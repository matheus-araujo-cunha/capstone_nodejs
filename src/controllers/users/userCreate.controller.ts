import userCreateService from "../../services/users/userCreate.service"
import { Request,Response } from "express";


const userCreateController= async(req:Request,res:Response)=>{
    const newUser = await userCreateService(req)


    return res.status(201).json(newUser)    
}
export default userCreateController