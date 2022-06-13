import { Router } from "express";
import userByIdController from "../controllers/users/userGet.controller";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";
import verifyUserExists from "../middlewares/verifyUserExists.middleware";
import validadeSchema from "../middlewares/verifySchemValidate.middleware";
import { createUserSchema } from "../schemas/users/createUser.schema";




const route=Router()


// route.get("/users/:uuid",userByIdController)
route.post("/users/register",validadeSchema(createUserSchema),verifyUserExists,userCreateController)
route.patch("/users/:uuid",userUpdateController)
route.delete("/users/:uuid",userDeleteController)



export default route