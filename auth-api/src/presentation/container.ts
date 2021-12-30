import { Container } from "inversify";

import { SYMBOLS } from "@main/inversify";

import { CreateAccountController } from "./controllers/CreateAccountController";
import { Controller } from "./protocols/Controller";

export function bindPresentationToContainer(container: Container) {
  container.bind<Controller>(SYMBOLS.Controller).to(CreateAccountController);
}
