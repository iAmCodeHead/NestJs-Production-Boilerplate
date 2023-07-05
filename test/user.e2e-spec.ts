import * as request from 'supertest';
import { APP_URL } from './utils/constants';

describe('New user (e2e)', () => {
  const app = APP_URL;
  const newUserEmail = `User.${Date.now()}@example.com`;
  const newUserPassword = `secret`;

  it('Register new user: /api/v1/user (POST)', async () => {
    return request(app)
      .post('/api/v1/user')
      .send({
        email: newUserEmail,
        password: newUserPassword,
      })
      .expect(201);
  });

  it('Do not register user with existing email: /api/v1/user (POST)', () => {
    return request(app)
      .post('/api/v1/user')
      .send({
        email: newUserEmail,
        password: newUserPassword,
      })
      .expect(422)
      .expect(({ body }) => {
        expect(body.errors.email).toBeDefined();
      });
  });
});
