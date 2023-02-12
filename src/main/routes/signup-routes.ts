import { Router } from 'express';
import { AdaptRoute } from '../adapter/express-routes-adapter';
import { makeSigUpController } from '../factories/signup';

export default (router: Router): void => {
  router.post('/signup', AdaptRoute(makeSigUpController()))
} 