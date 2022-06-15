import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../errors/error";

const verifyOwnerPermissionItem = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { decoded, item } = req;

  const { userUuid } = decoded;

  if (item.owner.userUuid !== userUuid) {
    throw new ErrorHandler(401, "You are not allowed to update this item");
  }

  return next();
};

export default verifyOwnerPermissionItem;
