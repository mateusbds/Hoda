import { inject, injectable } from "inversify";

import { Controller } from "@presentation/protocols/Controller";
import { container, SYMBOLS } from "@main/inversify";
import { Method } from "@main/server";
import { CreateAccount } from "@domain/useCases/CreateAccount";

@injectable()
export class CreateAccountController implements Controller {
  path = "/auth/sign-up";
  method: Method = "post";

  constructor(@inject(SYMBOLS.CreateAccount) createAccount: CreateAccount) {}

  async handle(data: Controller.Data): Promise<void> {
    console.log(data);
  }
}
