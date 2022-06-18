import validateSchema from "../middlewares/validateSchema.middleware"
import serializedCreateRateSchema from "../schemas/rates/ratesSchema"
import createRateController from "../controllers/rates/createRates.controller"
import { Router } from "express"
const route=Router()

export const ratesRoutes=()=>{
    route.get("/:id",)
    route.post("/register/:id",validateSchema(serializedCreateRateSchema),createRateController)
    route.patch("/:id",)
    route.delete("/:id",)
    return route
}
