import { NextFunction, Request, Response } from "express";
import { Item } from "../entities/Item";
import { ErrorHandler } from "../errors/error";
import { itemRepository, userRepository } from "../repositories";

const verifyPermissionForReserve = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userUuid } = req.decoded;
  const itemValidated = req.validated as Partial<Item>;

  const user = await userRepository.retrieve({ userUuid });

  const item = await itemRepository.retrieve({
    itemUuid: req.body.itemId,
  });

  if (!user.licenced && !item.service) {
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
