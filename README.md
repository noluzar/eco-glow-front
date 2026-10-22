# E-Commerce Web Application

A full-stack e-commerce web application built with the MERN stack, combining a React frontend with a Node.js and Express backend and MongoDB for data storage.

The project demonstrates full-stack web development concepts, including user authentication, REST API integration, database operations, and frontend-backend communication.

## Tech Stack

**Frontend**
- React
- JavaScript
- HTML5 and CSS3

**Backend**
- Node.js
- Express.js
- REST APIs
- JWT authentication

**Database**
- MongoDB

**Tools**
- Git and GitHub
- Postman

## Features

- User authentication using JSON Web Tokens (JWT).
- Frontend and backend integration.
- REST API communication between application components.
- MongoDB integration for data persistence.
- API testing using Postman.


## Project Structure

The application is organised into frontend and backend components.

ecommerce/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── package.json
│   └── server.js
└── README.md


## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js and npm
- MongoDB, or access to a MongoDB deployment
- Git

### 1. Clone the repository

```bash
git clone https://github.com/noluzar/eco-glow-front
cd eco-glow-front
```

### 2. Configure the backend

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory and add the environment variables required by your application. For example:

```env
PORT=5000
MONGODB_URI=mongodb_connection_string
JWT_SECRET=secret_key
```

### 3. Start the backend

```bash
npm start
```

Use the start command defined in your backend's `package.json`. Some projects use `npm run dev` during development.

### 4. Configure and start the frontend

Open a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

## API Testing

Postman can be used to test the application's API endpoints, including authentication and other implemented operations.

Refer to the application's route definitions for the available endpoints.

## Learning Outcomes

This project provided practical experience with:

- Building a web application using a frontend and backend architecture.
- Integrating REST APIs with a React frontend.
- Working with MongoDB for data persistence.
- Implementing JWT-based authentication.
- Debugging application behaviour and testing API requests.

## Future Improvements

Potential enhancements include:

- Expanding automated test coverage.
- Improving input validation and error handling.
- Adding product search, filtering, and pagination where needed.
- Improving accessibility and responsive design.
- Setting up automated build and deployment workflows.

## Author

**Noluthando Ndlovu**
