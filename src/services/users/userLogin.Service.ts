import { sign } from "jsonwebtoken";
import { Request,Response } from "express"
import { IStatusLogin } from "../../interfaces/users/login.interface"
import userRepositorie from "../../repositories/users/user.repositorie"
import { User } from "../../entities/User";

const userLoginService = async({validated}:Request):Promise<IStatusLogin>=>{
    const foundUser:User | null = await userRepositorie.retrieve({
        email:validated.email
    })
    if(!foundUser){
        return {status : 401 , message:{message:"Invalid Credencials"}}
    }
    if(!(await foundUser.comparePWD(validated.password))){
        return {status:401,message:{message:"Invalid Credentials"}}
    }

    const token = sign({ ...foundUser }, process.env.SECRET_KEY as string, {
        expiresIn: process.env.EXPIRES_IN,
      });
      
      return { status: 200, message: { token }};
}
export default userLoginService