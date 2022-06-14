import { Request } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/User";

const listAllRentsUserService = async ({ decoded }: Request) => {
  const { userUuid } = decoded;

  const userRepository = AppDataSource.getRepository(User);

  const user = (await userRepository.findOneBy({ userUuid })) as User;

  return user.rents;
};

export default listAllRentsUserService;
