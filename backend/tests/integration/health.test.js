const request = require('supertest');
const app = require('../../src/app');

describe('Health Check API Integration Test', () => {
  test('GET /health returns 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'healthy');
  });
});
