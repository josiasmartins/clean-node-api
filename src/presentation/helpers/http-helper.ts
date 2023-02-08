import { MissingParamError } from '../errors/missing-param-error'
import { HttpResponse } from '../protocols/http';
import { ServerError } from '../errors/server-errro';

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}

export const serverError = (): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError()
  }
}