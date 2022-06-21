import { Router } from "express";
import createRentController from "../controllers/rents/createRent.controller";
import deleteRentController from "../controllers/rents/deleteRent.controller";
import getRentByIdController from "../controllers/rents/getRentById.controller";
import listAllRentsUserController from "../controllers/rents/listAllRentsUser.controller";
import validateSchema from "../middlewares/validateSchema.middleware";
import validateToken from "../middlewares/validateToken.middleware";
import { createRentSchema } from "../schemas";

const routes = Router();

export const rentsRoutes = () => {
  routes.post(
    "",
    validateSchema(createRentSchema),
    validateToken,
    createRentController
  );
  routes.get("/:id", validateToken, getRentByIdController);
  routes.get("", validateToken, listAllRentsUserController);
  routes.delete("/:id", validateToken, deleteRentController);
  return routes;
};
