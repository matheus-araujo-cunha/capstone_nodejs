import { Express } from "express";
import { rentsRoutes } from "./rents.routes";

export const appRoutes = (app: Express) => {
  app.use("/rents", rentsRoutes());
};
