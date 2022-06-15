import { Router } from "express";
import deleteItemController from "../controllers/items/deleteItem.controller";
import getAllItemsController from "../controllers/items/getAllItems.controller";
import getItemByIdController from "../controllers/items/getItemById.controller";
import registerItemController from "../controllers/items/registerItem.controller";
import updateItemController from "../controllers/items/updateItem.controller";
import getItemByIdOr404 from "../middlewares/getItemByIdOr404.middleware";
import validateSchema from "../middlewares/validateSchema.middleware";
import validateToken from "../middlewares/validateToken.middleware";
import verifyOwnerPermissionItem from "../middlewares/verifyOwnerPermissionItem.middleware";
import { createItemSchema, updateItemSchema } from "../schemas/items";

const routes = Router();

export const itemRoutes = () => {
  routes.post(
    "/",
    validateSchema(createItemSchema),
    validateToken,
    registerItemController
  );

  routes.get("", getAllItemsController);
  routes.get("/:id", getItemByIdOr404, getItemByIdController);
  routes.patch(
    "/:id",
    validateSchema(updateItemSchema),
    validateToken,
    getItemByIdOr404,
    verifyOwnerPermissionItem,
    updateItemController
  );
  routes.delete(
    "/:id",
    validateToken,
    getItemByIdOr404,
    verifyOwnerPermissionItem,
    deleteItemController
  );
  return routes;
};
