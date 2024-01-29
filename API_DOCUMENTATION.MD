# Blogging API Documentation

## Overview

The Blogging API provides endpoints for managing blog posts and user authentication. This documentation outlines the available endpoints, their functionalities, and example requests.

## Base URL

The base URL for the API is `http://localhost:3002`.

## Authentication

All requests that require authentication must include a valid JWT token in the `Authorization` header.

## Users

### Signup

Create a new user account.

- **Endpoint:** `/api/users/signup`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "example_user",
    "email": "user@example.com",
    "password": "securepassword"
  }
```
-**Response:** `{
  "message": "Account created successfully. Check your email for verification."
}
`
Login
Authenticate an existing user.

Endpoint: /api/users/login
Method: POST
Request Body:
json

{
  "username": "example_user",
  "password": "securepassword"
}
Response:
```json

{
  "token": "eyJhbGciOiJIUzI1NiIsIn...",
  "user": {
    "_id": "user_id",
    "username": "example_user",
    "email": "user@example.com"
  }
}
```
## Login

Authenticate an existing user.

- **Endpoint:** `/api/users/login`
- **Method:** `POST`
- **Request Body:**
```
  {
    "username": "example_user",
    "password": "securepassword"
  }
```

