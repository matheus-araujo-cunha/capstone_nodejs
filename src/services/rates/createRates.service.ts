import { Rate } from "../../entities/Rate";
import { Request } from "express";
import rateRepository from "../../repositories/rates/rate.repository";
import serializedCreateRateSchema from "../../schemas/rates/ratesSchema";


const createRateService =async({rate}:Request):Promise<Partial<Rate>>=>{

    const newRate= await rateRepository.save({...rate}) 

    return serializedCreateRateSchema.validate(newRate,{stripUnknown:true})
}
export default createRateService