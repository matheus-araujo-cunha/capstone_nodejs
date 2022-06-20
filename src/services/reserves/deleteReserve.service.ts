import { Request } from "express";
import { reserveRepository } from "../../repositories/reserves";


const deleteReserveService =async (req:Request) => {
    const {id} = req.params
    await reserveRepository.delete(id)

    return {}

}

export default deleteReserveService