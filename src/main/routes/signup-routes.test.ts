import request from 'supertest'
import app from '../config/app'

// para ter acesso fora do dominio

describe('SignUp Routes', () => {
  test('should return an account on success', async () => {
    await request(app)
      .post('/test_cors')
      .send({
        name: 'rodrigo',
        email: 'rodrigo.manguinho@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})