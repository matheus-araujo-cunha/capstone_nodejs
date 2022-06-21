import {Request} from "express"
import { serializedGetRateSchema } from "../../schemas/rates/ratesSchema"
import { itemRepository } from "../../repositories"

const getRateByIdService= async({params}:Request)=>{
    const {id} =params
    const item =await itemRepository.retrieve({itemUuid:id})
    const test= {ratings:item.rates}
    return serializedGetRateSchema.validate(test,{stripUnknown:true})

}
export default getRateByIdService