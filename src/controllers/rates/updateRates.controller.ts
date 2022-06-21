import {Request,Response} from "express"
import updateRateService from "../../services/rates/updateRates.service"



const updateRateController= async(req:Request,res:Response)=>{
    const updatedRate = await updateRateService(req)
    
    return res.status(200).json(updatedRate)
}
export default updateRateController