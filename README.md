# Fudy Assignment REST APIs

Before you proceed, it's probably worth it to check the:
- [Project Breakdown](https://github.com/iAmCodeHead/fudy-assignment/tree/master/docs)


## Table of Contents

- [Features](#features)
- [Quick run](#quick-run)
- [Comfortable development](#comfortable-development)
- [Links](#links)
- [Database utils](#database-utils)
- [Tests](#tests)

## Features

- [x] Database ([typeorm](https://www.npmjs.com/package/typeorm)).
- [x] Seeding.
- [x] Config Service ([@nestjs/config](https://www.npmjs.com/package/@nestjs/config)).
- [x] Sign in, sign up and fetch profile.
- [x] Swagger.
- [x] E2E tests.
- [x] Simple Docker Containerization.


## Quick run

```bash
git clone --depth 1 https://github.com/iAmCodeHead/fudy-assignment.git my-app
cd my-app/
cp env-example .env
docker compose up -d
```

For check status run

```bash
docker compose logs
```

## Comfortable development

```bash
git clone --depth 1 https://github.com/iAmCodeHead/fudy-assignment.git my-app
cd my-app/
cp env-example .env
```

Change `DATABASE_HOST=postgres` to `DATABASE_HOST=localhost`

Run additional container:

```bash
docker compose up -d postgres
```

```bash
npm install

npm run migration:run

npm run seed:run

npm run start:dev
```

## Links

- Swagger: http://localhost:3000/docs

## Database utils

Generate migration

```bash
npm run migration:generate -- src/database/migrations/CreateNameTable 
```

Run migration

```bash
npm run migration:run
```

Revert migration

```bash
npm run migration:revert
```

Drop all tables in database

```bash
npm run schema:drop
```

Run seed

```bash
npm run seed:run
```

## Tests

```bash
(# e2e tests)

 (npm run test:e2e)
```
