import { Request, Response } from "express";
import { User } from "../../entities/User";
import { hash } from "bcrypt";
import userRepository from "../../repositories/users/user.repositorie";
import { serializedCreateUserSchema } from "../../schemas/users/createUser.schema";

const userCreateService = async ({
  validated,
}: Request): Promise<Partial<User>> => {
  const userValidated = validated as User;

  userValidated.password = await hash(userValidated.password, 10);

  const user = await userRepository.save({ ...userValidated });
  return serializedCreateUserSchema.validate(user, {
    stripUnknown: true,
  });
};
export default userCreateService;
