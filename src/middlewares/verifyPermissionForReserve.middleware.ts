import { NextFunction, Request, Response } from "express";
import { Item } from "../entities/Item";
import { User } from "../entities/User";
import { ErrorHandler } from "../errors/error";
import { itemRepository, userRepository } from "../repositories";

const verifyPermissionForReserve = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { licensed, userUuid } = req.decoded;

  // console.log("ID AQUIII", userUuid);

  const itemValidated = req.validated as Partial<Item>;

  const user = await userRepository.retrieve({ userUuid: userUuid });

  const item = await itemRepository.retrieve({
    itemUuid: req.body.itemId,
  });

  if (!licensed && !item.service) {
    throw new ErrorHandler(
      403,
      "You do not have a license to make a reservation without services"
    );
  }

  req.item = item;
  req.user = user;

  return next();
};

export default verifyPermissionForReserve;
