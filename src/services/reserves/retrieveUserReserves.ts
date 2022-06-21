import { Request } from "express";
import { User } from "../../entities/User";
import AppDataSource from "../../data-source";

const retrieveUserReservesService = async (req: Request) => {
  const id = req.decoded.userUuid;
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ userUuid: id });

  console.log(user);

  return await user.reserves;
};

export default retrieveUserReservesService;
