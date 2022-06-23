import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../errors/error";
import { IReserveUpdate } from "../interfaces/reserve.interface";
import { reserveRepository } from "../repositories/reserves";
import { formatDate } from "../utils";
import { DateTime } from "luxon";

const verifyReserveUpdateAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reserveValidated = req.validated as IReserveUpdate;

  const { id } = req.params;

  const reserveToUpdate = await reserveRepository.retrieve({ reserveUuid: id });

  const startDate = reserveValidated.startDate
    ? new Date(formatDate(reserveValidated.startDate))
    : new Date(reserveToUpdate.startDate);

  const finishDate = reserveValidated.finishDate
    ? new Date(formatDate(reserveValidated.finishDate))
    : new Date(reserveToUpdate.finishDate);

  if (finishDate.getTime() < startDate.getTime()) {
    throw new ErrorHandler(400, "finishDate cannot be earlier than startDate");
  }

  const reserves = await reserveRepository.listAll();

  const reservesByItem = reserves.filter(
    (reserve) => reserve.item.itemUuid === reserveToUpdate.item.itemUuid
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
        `A reservation already exists between the dates provided (${reserve.startDate} at ${reserve.finishDate})`
      );
    }
  }
  req.reserveToUpdate = { startDate, finishDate };
  return next();
};

export default verifyReserveUpdateAlreadyExists;
