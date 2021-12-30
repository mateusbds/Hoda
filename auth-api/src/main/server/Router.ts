import { Controller } from "@presentation/protocols/Controller";

export type Method = "get" | "post" | "put" | "patch" | "delete";

export interface RouterAdapt {
  adapt(params: RouterAdapt.Params): Promise<unknown>;
}

export namespace RouterAdapt {
  export type Params<R = unknown, T = unknown> = {
    controller: Controller;
    request: R;
    response: T;
  };
}
