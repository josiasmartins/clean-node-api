import request from 'supertest'
import app from '../config/app'

// para ter acesso fora do dominio

describe('CORS Middleaware', () => {
  test('should enable CORS', async () => {
    app.get('/test_cor', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .send({ name: 'rodrigo' })
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})