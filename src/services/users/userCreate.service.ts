import { Request,Response } from "express"
import { User } from "../../entities/User"
import { hash } from "bcrypt"
 import userRepositorie from "../../repositories/users/user.repositorie"
import { userWOPassword } from "../../utils"
const userCreateService =async({body}:Request):Promise<Partial<User>>=>{
    
    body.password = await hash(body.password,10)
    const user = await userRepositorie.save({...body})

    return userWOPassword(user)
}
export default userCreateService