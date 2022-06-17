import { Request, Response } from "express";
import retrieveReserveByIdService from "../../services/reserves/retrieveReserveById.service";

const retrieveReserveByIdController = async (req:Request, res:Response) => {
    const reserve = await retrieveReserveByIdService(req)

    return res.status(200).json(reserve)
}

export default retrieveReserveByIdController