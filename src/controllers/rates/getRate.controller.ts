import {Request,Response} from "express"
import getRateByIdService from "../../services/rates/getRates.service"


const getRateByIdController=async(req:Request,res:Response)=>{

    const user =await getRateByIdService(req)


    return res.status(200).json(user)

}
export default getRateByIdController