export interface CreateAccount {
  handle(params: CreateAccount.Params): void | Promise<void>;
}

export namespace CreateAccount {
  export type Params = {
    name: string;
    email: string;
    password: string;
  };
}
