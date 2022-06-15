import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../errors/error";
import { itemRepository } from "../repositories";

const getItemByIdOr404 = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const item = await itemRepository.retrieve({ itemUuid: id });

  if (!item) {
    throw new ErrorHandler(404, "Item Not Found");
  }

  req.item = item;

  return next();
};

export default getItemByIdOr404;
