import { Request, Response, NextFunction } from "express";
import { reserveRepository } from "../repositories/reserves";


const verifyReserveAlreadyExists = async (req:Request, res:Response, next:NextFunction) => {

    const reserves = await reserveRepository.listAll()

    for(let reserve of reserves){

        if(reserve.startDate == req.body.startDate && reserve.item == req.body.item){
            return res.status(409).json({message:"Reserve already exists"})
        }
    }

    return next()
}

export default verifyReserveAlreadyExists