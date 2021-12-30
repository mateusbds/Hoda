import { Method } from "@main/server";

export interface Controller {
  path: string;
  method: Method;

  handle(data?: Controller.Data): Promise<unknown>;
}

export namespace Controller {
  export type Data<Body = unknown, Params = unknown, Query = unknown> = {
    body?: Body;
    params?: Params;
    query?: Query;
  };
}
