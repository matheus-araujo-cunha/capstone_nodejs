import { User } from "../../entities/User";
import userRepository from "../../repositories/users/user.repositorie";
import { Request } from "express";



const userUpdateService = async ({
    params,
    body,
  }: Request): Promise<Partial<User>> => {
    const {id}= params

    await userRepository.update(id, body as Partial<User>);
    
    const user = await userRepository.retrieve({userUuid:id}) as User

    

    return user
  };

  export default userUpdateService