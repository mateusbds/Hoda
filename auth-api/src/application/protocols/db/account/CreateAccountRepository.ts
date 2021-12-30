import { CreateAccount } from "@domain/useCases/CreateAccount";

export interface CreateAccountRepository {
  create(params: CreateAccountRepository.Params): Promise<void>;
}

export namespace CreateAccountRepository {
  export type Params = CreateAccount.Params;
}
