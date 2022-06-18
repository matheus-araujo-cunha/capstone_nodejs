import { Express } from "express";
import { ratesRoutes } from "./rates.routes";
import { itemRoutes } from "./items.routes";
import { rentsRoutes } from "./rents.routes";
import { reserveRoutes } from "./reserves.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/rents", rentsRoutes());
  app.use("/users",userRoutes())
  app.use("/rates",ratesRoutes())
  app.use("/items", itemRoutes());
  app.use("/reserves", reserveRoutes())
};
