import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, Response } from 'express'
import { HttpResponse } from '../../presentation/protocols/http';

export const AdaptRoute = (controller: Controller) => {
  return async (req, res) =>  {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}