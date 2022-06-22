import { Request, Response } from "express";
import retrieveUserReservesService from "../../services/reserves/retrieveUserReserves";


const retrieveUserReservesController = async (req:Request, res:Response) => {
    const reserves = await retrieveUserReservesService(req)

    return res.status(200).json(reserves)
}

export default retrieveUserReservesController