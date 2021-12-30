import { Controller } from "@presentation/protocols/Controller";

export interface Server {
  setupRoutes(controllers: Controller[]): unknown;

  setupMiddlewares(): unknown;

  start(): Promise<void>;
}
