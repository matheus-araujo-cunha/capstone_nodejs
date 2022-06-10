import userLoginService from "../../services/users/userLogin.Service";
import { Request,Response } from "express";


const userLoginController= async(req:Request,res:Response)=>{
    const{status,message}=await userLoginService( req )

    return res.status(status).json(message) 
}
export default userLoginController