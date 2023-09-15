import { Router } from "express";

import { wrapper } from "./middlewares";
import { auth } from "./middlewares/auth";

import userRoutes from "../app/user";
import carRoutes from "../app/car";
import sessionRoutes from "../app/session";
import initializeRoutes from "./initializeRoutes";
// import { apiKey } from './middlewares/apiKey'

const routes = Router();


// routes.use(wrapper(apiKey));

initializeRoutes(
  routes,
  sessionRoutes,
);

const root = async () => {
  return { ok: true };
};

routes["get"]("/", wrapper(root));

routes.use(wrapper(auth, { middleware: true }));

initializeRoutes(
  routes,
  userRoutes,
  carRoutes
);

export default routes;
