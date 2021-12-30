import { Router } from "express";

import { container, SYMBOLS } from "@main/inversify";
import { Controller } from "@presentation/protocols/Controller";
import { RouterAdapt } from "@main/server/Router";

export function configRoutes() {
  const router = Router();

  const routerAdapt = container.get<RouterAdapt>(SYMBOLS.RouterAdapt);
  const controllers = container.getAllNamed<Controller>(
    SYMBOLS.Controller,
    "Controller"
  );

  controllers.forEach((controller) => {
    router[controller.method](controller.path, (request, response) => {
      routerAdapt.adapt({ controller, request, response });
    });
  });

  return router;
}
