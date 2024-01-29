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
## Posts

### Create Post

Create a new blog post.

- **Endpoint:** `/api/posts`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Example Post",
    "content": "This is a sample blog post.",
    "imageUrl": "https://example.com/image.jpg"
  }
```
- **RESPONSE:** ```{
	"post": {
		"title": "Building Restful Apis for backend developers",
		"content": "Create endpoints for creating, reading, updating, and deleting blog posts.",
		"author": "65b79e0486eab4f80ed037bb",
		"imageUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fvwq10xzbe6iz%2F5sBH4Agl614xM7exeLsTo7%2F9e84dce01735f155911e611c42c9793f%2Frest-api.png&tbnid=IBy3kq_NEAgpSM&vet=12ahUKEwjbuJ_h0YKEAxUvk_0HHXHdDSgQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fmannhowie.com%2Frest-api&docid=HyMFONiZ6ocpBM&w=1210&h=848&q=restful%20api&ved=2ahUKEwjbuJ_h0YKEAxUvk_0HHXHdDSgQMygAegQIARB0",
		"_id": "65b7a39e1b15de09e9c32604",
		"createdAt": "2024-01-29T13:09:50.079Z",
		"updatedAt": "2024-01-29T13:09:50.079Z",
		"__v": 0
	}
}
```
## Posts

### Get Single Post

Retrieve details of a single blog post.

- **Endpoint:** `/api/posts/{postId}`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "post": {
      "_id": "post_id",
      "title": "Example Post",
      "content": "This is a sample blog post.",
      "imageUrl": "https://example.com/image.jpg",
      "createdAt": "2024-01-29T13:06:44.161Z",
      "updatedAt": "2024-01-29T13:06:44.161Z"
    }
  }
```
### List Posts

Retrieve a list of all blog posts.

- **Endpoint:** `/api/posts`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "posts": [
      {
        "_id": "post_id1",
        "title": "Example Post 1",
        "content": "This is a sample blog post.",
        "imageUrl": "https://example.com/image1.jpg",
        "createdAt": "2024-01-29T13:06:44.161Z",
        "updatedAt": "2024-01-29T13:06:44.161Z"
      },
      {
        "_id": "post_id2",
        "title": "Example Post 2",
        "content": "Another sample blog post.",
        "imageUrl": "https://example.com/image2.jpg",
        "createdAt": "2024-01-29T13:08:00.000Z",
        "updatedAt": "2024-01-29T13:08:00.000Z"
      }
    ]
  }
```
### Update Post

Update an existing blog post.

- **Endpoint:** `/api/posts/{postId}`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "title": "Updated Post Title",
    "content": "This is an updated blog post.",
    "imageUrl": "https://example.com/updated-image.jpg"
  }
-**RESPONSE:**
```{
  "post": {
    "_id": "post_id",
    "title": "Updated Post Title",
    "content": "This is an updated blog post.",
    "imageUrl": "https://example.com/updated-image.jpg",
    "createdAt": "2024-01-29T13:06:44.161Z",
    "updatedAt": "2024-01-29T13:10:00.000Z"
  }
}
```
### Delete Post

Delete an existing blog post.

- **Endpoint:** `/api/posts/{postId}`
- **Method:** `DELETE`
- **Response:**
  ```json
  {
    "message": "Post deleted successfully."
  }
```
