import { Request } from "express";
import userRepository from "../../repositories/users/user.repositorie";
import { User } from "../../entities/User";
import { userWOPassword } from "../../utils";


  const userDeleteUserService = async ({ user }: Request): Promise<Partial<User>> => {
    await userRepository.delete(user.userUuid);

    return userWOPassword(user);
  };


  export default userDeleteUserService