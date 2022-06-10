import { sign } from "jsonwebtoken";
import { Request,Response } from "express"
import { IStatusLogin } from "../../interfaces/users/login.interface"
import userRepositorie from "../../repositories/users/user.repositorie"

const userLoginService = async({body}:Request):Promise<IStatusLogin>=>{
    const foundUser = await userRepositorie.retrieve({
        email:body.email.toLowerCase()
    })
    if(!foundUser){
        return {status : 400 , message:{message:"Invalid Credencials"}}
    }
    if(!(await foundUser.comparePWD(body.password))){
        return {status:400,message:{message:"Invalid Credencials"}}
    }

    const token = sign({ ...foundUser }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRES_IN,
      });
      
      return { status: 200, message: { token }};
}
export default userLoginService