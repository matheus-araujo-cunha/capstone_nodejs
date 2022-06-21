import { Request } from "express";
import rateRepository from "../../repositories/rates/rate.repository";




const deleteRateService= async({params}:Request)=>{
    const {id} = params

    const deleteRate = rateRepository.delete(id)
    
    return {}
}   
export default deleteRateService