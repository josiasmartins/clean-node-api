import { EmailValidatorAdapter } from './email-validator-adapter';
import validator from 'validator';
import isEmail from 'validator/lib/isEmail';

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true
  }
}))

describe('EmailValidatorAdapter', () => {
  test('should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter();
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@gmail.com');
    expect(isValid).toBe(false)
  })

  test('should return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter();
    const isValid = sut.isValid('valid_email@gmail.com');
    expect(isValid).toBe(true);
  })

  test('should call validator with correct email', () => {
    const sut = new EmailValidatorAdapter();
    const isEmail = jest.spyOn(validator, 'isEmail');
    sut.isValid('any_email@gmail.com');
    expect(isEmail).toHaveBeenCalledWith('any_email@gmail.com')
  })
})