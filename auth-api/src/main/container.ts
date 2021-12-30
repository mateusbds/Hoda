import { Container } from "inversify";

import { Server } from "@main/server";
import { RouterAdapt } from "@main/server/Router";
import { ExpressRouterAdapt } from "@infra/adapters/express/ExpressRouterAdapt";
import { ExpressServer } from "@infra/adapters/express/ExpressServer";

import { SYMBOLS } from "./inversify";

export function bindMainToContainer(container: Container) {
  container.bind<Server>(SYMBOLS.Server).to(ExpressServer);
  container.bind<RouterAdapt>(SYMBOLS.RouterAdapt).to(ExpressRouterAdapt);
}
