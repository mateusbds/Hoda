import { CreateAccount } from "@domain/useCases/CreateAccount";
import { CreateAccountRepository } from "@application/protocols/db/account/CreateAccountRepository";

export class AccountRepository implements CreateAccountRepository {
  async create(params: CreateAccount.Params): Promise<void> {
    console.log("Conta criada com sucesso!");
  }
}
