import { Router } from "express";
import { userGetByIdController } from "../controllers/users/userGet.controller";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";
import verifyUserExists from "../middlewares/verifyUserExists.middleware";
import validadeSchema from "../middlewares/validateSchema.middleware";
import { createUserSchema } from "../schemas/users/createUser.schema";
import userLoginController from "../controllers/users/userLogin.controller";
import loginSchema from "../schemas/users/loginUserschemas";
import verifyGetUser from "../middlewares/verifyGetUserExists.middleware";

const route=Router()

export const userRoutes=()=>{
    route.get("/:id",verifyGetUser,userGetByIdController)
    route.post("/register",validadeSchema(createUserSchema),verifyUserExists,userCreateController)
    route.post("/login",validadeSchema(loginSchema),userLoginController)
    route.patch("/:id",userUpdateController)
    route.delete("/:id",userDeleteController)
    return route
}
