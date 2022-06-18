import { Request,Response } from "express";
import createRateService from "../../services/rates/createRates.service";


const createRateController=async(req:Request,res:Response)=>{
    const rate = await createRateService(req)

    return res.status(201).json({rate})

}
export default createRateController