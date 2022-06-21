import validateSchema from "../middlewares/validateSchema.middleware"
import {serializedCreateRateSchema} from "../schemas/rates/ratesSchema"
import createRateController from "../controllers/rates/createRates.controller"
import { Router } from "express"
import verifyItemExists from "../middlewares/verifyItemExists.middleware"
import getRateByIdController from "../controllers/rates/getRate.controller"
const route=Router()

export const ratesRoutes=()=>{
    route.get("/:id",getRateByIdController)
    route.post("/register/:id",validateSchema(serializedCreateRateSchema),verifyItemExists,createRateController)
    route.patch("/:id",)
    route.delete("/:id",)
    return route
}
