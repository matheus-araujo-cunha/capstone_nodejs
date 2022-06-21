import {NextFunction, Request,Response} from "express"
import { itemRepository } from "../repositories"


const verifyItemExists=async ({params}:Request,res:Response,next:NextFunction)=>{
    const {id} = params
    const item =await itemRepository.retrieve({itemUuid:id})

    if(!item){
        return res.status(400).json({
            message:"Item not find"
        })
    }
    
    return next()

}
export default verifyItemExists