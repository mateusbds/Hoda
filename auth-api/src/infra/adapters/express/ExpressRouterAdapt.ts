import { injectable } from "inversify";
import { Request, Response } from "express";

import { RouterAdapt } from "@main/server/Router";
import { Controller } from "@presentation/protocols/Controller";
import { container, SYMBOLS } from "@main/inversify";

@injectable()
export class ExpressRouterAdapt implements RouterAdapt {
  async adapt({
    controller,
    request,
    response,
  }: RouterAdapt.Params<Request, Response>) {
    const { body, params, query } = request;
    const result = await controller.handle({ body, params, query });
    return response.json(result);
  }
}
