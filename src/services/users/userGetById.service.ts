import {Request} from "express"
import { User } from "../../entities/User"
import userRepositorie from "../../repositories/users/user.repositorie"
import { serializedCreateUserSchema } from "../../schemas/users/createUser.schema"



export const userGetByIdService = async (req:Request)=>{
    const {id} = req.params
    const user = await userRepositorie.retrieve({userUuid: id})
    
    return serializedCreateUserSchema.validate(user,{stripUnknown:true})
}
