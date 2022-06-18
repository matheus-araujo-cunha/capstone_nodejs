import { Rate } from "../../entities/Rate";
import { Request, Response } from "express";
import rateRepository from "../../repositories/rates/rate.repository";
import serializedCreateRateSchema from "../../schemas/rates/ratesSchema";
import { Item } from "../../entities/Item";
import dataSource from "../../data-source";


interface IRates{
    rate:number
    comment:string
}


const createRateService =async({rate}:Request,{params}:Request):Promise<Partial<Rate>>=>{
    
    const {id} = params
    const item =  dataSource.getRepository(Item)
    
    const newItem:Partial<Item|null> = new Item()
     
    newItem.rates.push = rate
    
    const newRate= await rateRepository.save({...rate}) 

    return serializedCreateRateSchema.validate(newRate,{stripUnknown:true})
}
export default createRateService