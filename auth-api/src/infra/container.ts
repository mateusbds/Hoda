import { Container } from "inversify";

import { SYMBOLS } from "@main/inversify/symbols";

import { ExpressRouterAdapt } from "./adapters/express/ExpressRouterAdapt";
import { ExpressServer } from "./adapters/express/ExpressServer";

export function bindInfraToContainer(container: Container) {
  container.bind<ExpressServer>(SYMBOLS.Server).to(ExpressServer);
  container
    .bind<ExpressRouterAdapt>(SYMBOLS.RouterAdapt)
    .to(ExpressRouterAdapt);
}
