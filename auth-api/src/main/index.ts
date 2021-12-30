import "reflect-metadata";

import { SYMBOLS, container } from "./inversify";
import { Server } from "./server";
import { Controller } from "@presentation/protocols/Controller";

function bootstrap() {
  const server = container.get<Server>(SYMBOLS.Server);
  const controllers = container.getAllNamed<Controller>(
    SYMBOLS.Controller,
    "Controller"
  );

  server.setupMiddlewares();
  server.setupRoutes(controllers);
  server.start();
}

bootstrap();
