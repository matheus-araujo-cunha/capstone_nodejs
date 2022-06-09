import { Router } from "express";
import createRentController from "../controllers/rents/createRent.controller";
import deleteRentController from "../controllers/rents/deleteRent.controller";
import getRentByIdController from "../controllers/rents/getRentById.controller";
import listAllRentsUserController from "../controllers/rents/listAllRentsUser.controller";
import validateSchema from "../middlewares/validateSchema.middleware";
import { createRentSchema } from "../schemas";

const routes = Router();

export const rentsRoutes = () => {
  routes.post("", validateSchema(createRentSchema), createRentController);
  routes.get("/:id", getRentByIdController);
  routes.get("", listAllRentsUserController);
  routes.delete("/:id", deleteRentController);
  return routes;
};
