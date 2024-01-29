# Blogging-Platform
 PROJECT BASED ASSESSMENT at @_talentsync  ; a blogging platform where users can create, read, update, and delete blog posts.
 # Blogging API

A RESTful API for a blogging platform where users can create, read, update, and delete blog posts. The API also supports user authentication and authorization.

## Features

- User Authentication: Register and login functionality using JWT authentication.
- Blog Post Management: Endpoints for creating, reading, updating, and deleting blog posts.
- Authorizations: Ensure only authorized users can perform certain actions.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for Authentication

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/steve2700/blogging-api
   ```
## Install dependencies

1. Install dependencies:

```bash
cd blogging-api
npm install
```
2. Set up environment variables:
   `Create a .env file in the root directory and add the following:` 
```json
MONGODB_URI=
JWT_SECRET=
SECRET_KEY=
JWT_EXPIRATION=
PORT=3002
CLIENT_URL=
EMAIL_USERNAME=
EMAIL_PASSWORD=
RESET_SECRET=
VERIFICATION_SECRET=
EMAIL_APP_PASSWORD=
```
3.Run the application:

```npm start```
## API Documentation

Explore the API endpoints and learn how to integrate with the Blog Application by referring to our [API Documentation](https://github.com/steve2700/blogging-api/blob/dev/API_DOCUMENTATION.MD).




