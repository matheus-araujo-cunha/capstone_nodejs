import { Router } from "express";
import userByIdController from "../controllers/users/userGet.controller";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";
import verifyUserExists from "../middlewares/verifyUserExists.middleware";
import validadeSchema from "../middlewares/validateSchema.middleware";
import { createUserSchema } from "../schemas/users/createUser.schema";

const route=Router()

export const userRoutes=()=>{
    route.get("/:id",userByIdController)
    route.post("/register",validadeSchema(createUserSchema),verifyUserExists,userCreateController)
    route.patch("/:id",userUpdateController)
    route.delete("/:id",userDeleteController)
}

