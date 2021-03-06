import userRepositorie from "../repositories/users/user.repositorie";
import { NextFunction, Request,Response } from "express";


const verifyGetUser = async(req:Request,res:Response,next:NextFunction) =>{
    const {id} = req.params
    const findUser = await userRepositorie.retrieve({userUuid:id})

    if (!findUser){
        return res.status(400).json({
            message:"User not found"
        })
    }
    return next()
}

export default verifyGetUser