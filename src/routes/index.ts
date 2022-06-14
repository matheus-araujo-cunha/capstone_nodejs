import { Express } from "express";
import { rentsRoutes } from "./rents.routes";
import {userRoutes} from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/rents", rentsRoutes());
  app.use("/users",userRoutes())
};
