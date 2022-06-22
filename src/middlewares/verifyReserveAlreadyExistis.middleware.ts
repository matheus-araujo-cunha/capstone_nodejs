import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../errors/error";
import { IRentCreate } from "../interfaces/rent.interface";
import { IReserveCreate } from "../interfaces/reserve.interface";
import { reserveRepository } from "../repositories/reserves";
import { formatDate } from "../utils";

const verifyReserveAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reserveValidated = req.validated as IReserveCreate;

  const { itemUuid } = req.item;

  const startDate = new Date(formatDate(reserveValidated.startDate));
  const finishDate = new Date(formatDate(reserveValidated.finishDate));

  if (finishDate.getTime() < startDate.getTime()) {
    throw new ErrorHandler(400, "finishDate cannot be earlier than startDate");
  }

  const reserves = await reserveRepository.listAll();

  const reservesByItem = reserves.filter(
    (reserve) => reserve.item.itemUuid === itemUuid
  );

  for (let reserve of reservesByItem) {
    const reserveStartTS = new Date(reserve.startDate).getTime();
    const reserveFinishTS = new Date(reserve.finishDate).getTime();

    const bodyStartTS = new Date(startDate).getTime();
    const bodyFinishTS = new Date(finishDate).getTime();

    if (
      (reserveStartTS >= bodyStartTS && reserveStartTS <= bodyFinishTS) ||
      (reserveFinishTS >= bodyStartTS && reserveFinishTS <= bodyFinishTS)
    ) {
      throw new ErrorHandler(
        409,
        "A reservation already exists between the dates provided"
      );
    }
  }

  return next();
};

export default verifyReserveAlreadyExists;
