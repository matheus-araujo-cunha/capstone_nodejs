import { Request,Response } from "express"
import { User } from "../../entities/User"
import { hash } from "bcrypt"
import userRepository from "../../repositories/users/user.repositorie"
import { serializedCreateUserSchema } from "../../schemas/users/createUser.schema"


const userCreateService =async({validated}:Request):Promise<Partial<User>>=>{
    
    (validated as User).password = await hash((validated as User).password,10)
    const user = await userRepository.save({...validated})
    
    return serializedCreateUserSchema.validate(user,{
        stripUnknown:true
    })
}
export default userCreateService