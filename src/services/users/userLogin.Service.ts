import { sign } from "crypto"
import { Request,Response } from "express"
import { IStatusLogin } from "../../interfaces/users/login.interface"
import userRepositorie from "../../repositories/users/user.repositorie"
import { ILogin } from "../../interfaces/users/login.interface"

const userLoginService = async({body}:Request):Promise<IStatusLogin>=>{
    const foundUser = await userRepositorie.retrieve({
        email:body.email.toLowerCase()
    })
    const token =sign({email:body.email},process.env.SECRET_KEY,{

    })
}
export default userLoginService