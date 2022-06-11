import { Express } from "express";
import route from "./userRoute"

export const appRoutes = (app: Express) => {

    app.use(route)


};




