# Auth

## Table of Contents

- [General info](#general-info)
- [Configure Auth](#configure-auth)

---

## General info

This app uses sign in and sign up via email and password.

```mermaid
sequenceDiagram
    participant A as Fronted App (Web, Mobile, Desktop)
    participant B as Backend App

    A->>B: 1. Sign up via email and password
    A->>B: 2. Sign in via email and password
    B->>A: 3. Get a JWT token
    A->>B: 4. Make any requests using a JWT token
```

1. Make any requests using a JWT token

---

## Configure Auth

1. Generate secret key

    ```bash
    node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
    ```

1. Go to `/.env` and change value in `AUTH_JWT_SECRET`

    ```text
    AUTH_JWT_SECRET=HERE_SECRET_KEY_FROM_STEP_1
    ```

---

Previous: [Working with database](database.md)

Next: [Serialization](serialization.md)
