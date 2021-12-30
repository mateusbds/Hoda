import { inject, injectable } from "inversify";

import { CreateAccount } from "@domain/useCases/CreateAccount";
import { container } from "@main/inversify";

import { CreateAccountRepository } from "../protocols/db/account/CreateAccountRepository";

@injectable()
export class DbCreateAccount implements CreateAccount {
  // @inject()
  // private readonly accountRepository: CreateAccountRepository

  async handle(params: CreateAccount.Params): Promise<void> {
    // await this.accountRepository.create(params);
  }
}
