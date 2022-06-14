import { Request } from "express";
import userRepository from "../../repositories/users/user.repositorie";
import { User } from "../../entities/User";
import { userWOPassword } from "../../utils/userWOpass.util";


  const userDeleteUserService = async ({params}:Request)=> {
    const {id} =params

    await userRepository.delete(id);


    return {}

  };


  export default userDeleteUserService