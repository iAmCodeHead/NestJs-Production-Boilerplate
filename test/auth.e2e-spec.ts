import * as request from 'supertest';
import { APP_URL } from './utils/constants';

describe('Auth user (e2e)', () => {
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

  it('Login: /api/v1/auth/login (POST)', () => {
    return request(app)
      .post('/api/v1/auth/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .expect(200)
      .expect(({ body }) => {
        expect(body.token).toBeDefined();
        expect(body.user.email).toBeDefined();
        expect(body.user.password).not.toBeDefined();
        expect(body.user.previousPassword).not.toBeDefined();
      });
  });

  it('Login user: /api/v1/auth/login (POST)', () => {
    return request(app)
      .post('/api/v1/auth/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .expect(200)
      .expect(({ body }) => {
        expect(body.token).toBeDefined();
        expect(body.user.email).toBeDefined();
      });
  });

  it('Login with extra spaces trimmed off: /api/v1/auth/login (POST)', () => {
    return request(app)
      .post('/api/v1/auth/login')
      .send({ email: newUserEmail + '  ', password: newUserPassword })
      .expect(({ body }) => {
        expect(body.user.email).toBeDefined();
        expect(body.user.email).toBe(newUserEmail.toLocaleLowerCase());
      });
  });

  it('User retrieves profile: /api/v1/auth/me (GET)', async () => {
    const newUserApiToken = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app)
      .get('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send()
      .expect(({ body }) => {
        expect(body.email).toBeDefined();
        expect(body.password).not.toBeDefined();
        expect(body.previousPassword).not.toBeDefined();
      });
  });
});
