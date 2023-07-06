# Installation

---

## Table of Contents

- [Comfortable development](#comfortable-development)
- [Quick run](#quick-run)
- [Links](#links)

---

## Comfortable development

1. Clone repository

    ```bash
    git clone --depth 1 https://github.com/iAmCodeHead/fudy-assignment.git my-app
    ```

2. Go into the `my-app` folder, and copy `env-example` as `.env`.

    ```bash
    cd my-app/
    cp env-example .env
    ```

3. Supply local values for each of the environment variables in `.env`

4. Install dependency

    ```bash
    npm install
    ```

5. Run migrations

    ```bash
    npm run migration:run
    ```

6. Run seeds

    ```bash
    npm run seed:run
    ```

7. Run app in dev mode

    ```bash
    npm run start:dev
    ```

8. Open http://localhost:3000 (you may change the value `3000` to the value of `APP_PORT` in `.env` if you so wish).

---

## Quick run

If you want quick run your app, you can use following commands:

1. Clone repository

    ```bash
    git clone --depth 1 https://github.com/iAmCodeHead/fudy-assignment.git my-app
    ```

1. Go to folder, and copy `env-example` as `.env`.

    ```bash
    cd my-app/
    cp env-example .env
    ```

1. Run containers

    ```bash
    docker compose up -d
    ```

1. For check status run

    ```bash
    docker compose logs
    ```

1. Open http://localhost:3000

---

## Links

- Swagger (API docs): http://localhost:3000/docs

---

Previous: [Introduction](introduction.md)

Next: [Working with database](database.md)
