import { Rate } from "../../entities/Rate";
import { Request } from "express";
import rateRepository from "../../repositories/rates/rate.repository";
import {serializedCreateRateSchema} from "../../schemas/rates/ratesSchema";
import { itemRepository } from "../../repositories";


const createRateService =async({validated,params}:Request):Promise<Partial<Rate>>=>{
    const rateValidated = validated as Partial<Rate>
    const {id} = params
    const newRate= await rateRepository.save({...rateValidated}) 
    const findItem = await itemRepository.retrieve({itemUuid: id}) 
   
    findItem.rates.push(newRate)

    await itemRepository.save(findItem)
    return serializedCreateRateSchema.validate(newRate,{stripUnknown:true})
}
export default createRateService