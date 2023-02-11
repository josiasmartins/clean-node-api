import request from 'supertest'
import app from '../config/app'

// para ter acesso fora do dominio

describe('Content Type Middleaware', () => {
  test('should return default content type as json', async () => {
    app.get('/test_content_type', (req, res) => {
      res.json('')
    })
    await request(app)
      .get('/test_content_type')
      .expect('access-control-allow-origin', /json/)
  })

  test('should return xml content type when forced', async () => {
    app.get('/test_content_type', (req, res) => {
      res.type('xml')
      res.json('')
    })
    await request(app)
      .get('/test_content_type')
      .expect('access-control-allow-origin', /xml/)
  })
})