import { inject, injectable } from "inversify";
import express from "express";

import { Server } from "@main/server";
import { SYMBOLS } from "@main/inversify";
import { ExpressRouterAdapt } from "./ExpressRouterAdapt";
import { Controller } from "@presentation/protocols/Controller";

@injectable()
export class ExpressServer implements Server {
  private readonly app = express();

  constructor(
    @inject(SYMBOLS.RouterAdapt) private readonly adapt: ExpressRouterAdapt
  ) {}

  setupRoutes(controllers: Controller[]) {
    for (const controller of controllers) {
      this.app[controller.method](
        controller.path,
        async (request, response) => {
          return await this.adapt.adapt({
            controller,
            request,
            response,
          });
        }
      );
    }
  }

  setupMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  async start() {
    this.app.listen(4000, () => console.log("Server is running on port 4000"));
  }
}
