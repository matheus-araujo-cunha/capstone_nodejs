import { User } from "../../entities/User";
import { userWOPassword } from "../../utils";
import userRepository from "../../repositories/users/user.repositorie";
import { Request } from "express";



const userUpdateService = async ({
    user,
    body,
  }: Request): Promise<Partial<User>> => {
    await userRepository.update(user.userUuid, { ...body });

    return userWOPassword({ ...user, ...body });
  };

  export default userUpdateService