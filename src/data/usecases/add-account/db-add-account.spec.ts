import { Encrypter } from '../../protocols/encrypter';
import { DbAddAccount } from './db-add-account';

interface SutType {
  sut: DbAddAccount,
  encrypterStub: Encrypter
}

const makeEncrypter = (): Encrypter => {
  class EncrypterStub  implements Encrypter {
    async encrypt (value: string): Promise<string> {
      return new Promise(resolve => resolve('hash_password'))
    }
  }

  return new EncrypterStub()
}

const makeSut = (): any => {


  const encrypterStub = makeEncrypter()
  const sut = new DbAddAccount(encrypterStub);

  return {
    sut,
    encrypterStub
  }
}

describe('DbAddAccount', () => {

  test('should call Encrypter with correct password', async () => {
    const { sut, encrypterStub } = makeSut()
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt');
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password');
  })

})