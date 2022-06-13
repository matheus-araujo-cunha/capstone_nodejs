import { User } from "../../entities/User";
import { userWOPassword } from "../../utils/userWOpass.util";
import userRepository from "../../repositories/users/user.repositorie";
import { Request } from "express";



const userUpdateService = async ({
    user,
    validated,
  }: Request): Promise<Partial<User>> => {
    await userRepository.update(user.userUuid, { ...validated });

    return userWOPassword({ ...user, ...validated });
  };

  export default userUpdateService