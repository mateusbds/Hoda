import { Container } from "inversify";

import { CreateAccount } from "@domain/useCases/CreateAccount";
import { SYMBOLS } from "@main/inversify";

import { DbCreateAccount } from "./useCases/DbCreateAccount";

export function bindApplicationToContainer(container: Container) {
  container.bind<CreateAccount>(SYMBOLS.CreateAccount).to(DbCreateAccount);
}
