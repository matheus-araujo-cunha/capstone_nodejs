import { Request,Response } from "express";
import deleteRateService from "../../services/rates/deleteRates.service";


const deleteRateController=async(req:Request,res:Response)=>{

    const deleteUser = await deleteRateService(req)

    return res.status(200).json({
        message:"User deleted"
    })
}
export default deleteRateController

