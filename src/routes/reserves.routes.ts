import {Router} from "express"
import createReserveController from "../controllers/reserves/createReserve.controller"
import deleteReserveController from "../controllers/reserves/deleteReserve.controller"
import retrieveReserveByIdController from "../controllers/reserves/retrieveReserveById.controller"
import retrieveUserReservesController from "../controllers/reserves/retrieveUserReserves"
import validateSchema from "../middlewares/validateSchema.middleware"
import verifyReserveAlreadyExists from "../middlewares/verifyReserveAlreadyExistis.middleware"
import { createReserveSchema } from "../schemas/reserves"


const routes = Router()
export const reserveRoutes = () => {
    routes.post("", verifyReserveAlreadyExists, validateSchema(createReserveSchema), createReserveController)
    routes.get("",retrieveUserReservesController)
    routes.get("/:id",retrieveReserveByIdController)
    routes.delete("/:id", deleteReserveController)

    return routes
}