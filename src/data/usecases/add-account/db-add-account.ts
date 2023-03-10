import { AccountModel, AddAccount, AddAccountModel, Encrypter,  } from './db-add-account-protocols';
import { AddAccountRepository } from '../../protocols/add-account-repository';

export class DbAddAccount implements AddAccount {

  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor(encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter;
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPasswod = await this.encrypter.encrypt(accountData.password)
    const account = await this.addAccountRepository.add(Object.assign({}, accountData, { passsword: hashedPasswod }))
    console.log(account)
    return account
  }
}