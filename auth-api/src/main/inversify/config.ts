import { Container } from "inversify";

import { bindApplicationToContainer } from "@application/container";
import { bindMainToContainer } from "@main/container";
import { bindPresentationToContainer } from "@presentation/container";

const container = new Container();

bindApplicationToContainer(container);
bindMainToContainer(container);
bindPresentationToContainer(container);

export { container };
