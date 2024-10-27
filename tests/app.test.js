// tests/app.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should return a 200 status and a Hello, World! message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Hello, World!');
    });
});

describe('GET /api-docs', () => {
    it('should return a 200 status for the Swagger UI', async () => {
        const response = await request(app).get('/api-docs');
        expect(response.statusCode).toBe(200);
    });
});
