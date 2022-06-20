import { Request, Response } from "express";
import deleteReserveService from "../../services/reserves/deleteReserve.service";

const deleteReserveController = async (req:Request, res:Response) => {
    await deleteReserveService(req)

    return res.status(204).json({})
}

export default deleteReserveController