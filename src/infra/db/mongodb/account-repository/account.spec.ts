import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account';


describe('Account Mongo Repository', () => {

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  });

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    // await MongoHelper.disconnect()
    const accountCollection = await MongoHelper.getCollection('accounts');
    await accountCollection.deleteMany({})
  })

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository()
  }

  test('should return an account', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@gmail.com',
      password: 'any_password'
    })
    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy()
    expect(account).toBe('any_name');
    expect(account).toBe('any_emai@gmail.com');
    expect(account).toBe('any_password');
  });
})