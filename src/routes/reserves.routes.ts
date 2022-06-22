import { Router } from "express";
import createReserveController from "../controllers/reserves/createReserve.controller";
import deleteReserveController from "../controllers/reserves/deleteReserve.controller";
import retrieveReserveByIdController from "../controllers/reserves/retrieveReserveById.controller";
import retrieveUserReservesController from "../controllers/reserves/retrieveUserReserves";
import updateReserveController from "../controllers/reserves/updateReserve.controller";
import validateSchema from "../middlewares/validateSchema.middleware";
import validateToken from "../middlewares/validateToken.middleware";
import verifyPermissionForReserve from "../middlewares/verifyPermissionForReserve.middleware";
import verifyReserveAlreadyExists from "../middlewares/verifyReserveAlreadyExistis.middleware";
import verifyReserveUpdateAlreadyExists from "../middlewares/verifyUpdateReserveAlreadyExists.middleware";
import { createReserveSchema, updateReserveSchema } from "../schemas/reserves";

const routes = Router();
export const reserveRoutes = () => {
  routes.post(
    "",
    validateToken,
    validateSchema(createReserveSchema),
    verifyPermissionForReserve,
    verifyReserveAlreadyExists,
    createReserveController
  );
  routes.patch(
    "/:id",
    validateSchema(updateReserveSchema),
    validateToken,
    verifyReserveUpdateAlreadyExists,
    updateReserveController
  );
  routes.get("", validateToken, retrieveUserReservesController);
  routes.get("/:id", retrieveReserveByIdController);
  routes.delete("/:id", deleteReserveController);

  return routes;
};
