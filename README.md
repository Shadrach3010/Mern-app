Here is a **more professional and portfolio-ready version** of your README. I kept your content but improved:

* structure
* clarity
* deployment info
* project overview
* environment variables
* API documentation
* live demo section

This is the kind of README recruiters expect on GitHub.

---

# MERN JWT Authentication Hub

A modern **full-stack authentication system** built using the **MERN stack**. This project demonstrates secure **JWT-based authentication**, protected API routes, and a modern **React + Vite frontend** with a clean UI and centralized state management.

The application allows users to **register, log in, manage their profile, and securely interact with protected backend routes**.

---

# 🌐 Live Demo

Frontend:
[https://mern-app-six-dusky.vercel.app](https://mern-app-six-dusky.vercel.app)

Backend API:
[https://mern-backend-btvx.onrender.com](https://mern-backend-btvx.onrender.com)

---

# 🚀 Features

### Authentication

* Secure **JWT-based authentication**
* User **registration and login**
* **Protected routes** using middleware
* Password hashing using **Bcrypt**

### Frontend

* Modern **React 19 + Vite** architecture
* **Glassmorphism UI design**
* Animated gradients and clean layout
* Axios-based API communication
* Client-side routing with **React Router**

### Backend

* **RESTful API** built with Express
* MongoDB database integration using **Mongoose**
* Centralized error handling
* Environment variable configuration
* Secure authentication middleware

---

# 🛠️ Tech Stack

### Frontend

* React 19
* Vite
* Axios
* React Router 7
* Vanilla CSS

### Backend

* Node.js
* Express 5
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* BcryptJS

### Deployment

* Frontend hosted on **Vercel**
* Backend hosted on **Render**
* Database hosted on **MongoDB Atlas**

---

# ⚡ Project Structure

```
Mern-app
│
├── mern-backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
└── mern-frontend
    ├── src
    │   ├── pages
    │   ├── components
    │   ├── context
    │   └── api.js
```

---

# ⚡ Quick Start

## 1️⃣ Prerequisites

Make sure you have installed:

* Node.js (v18 or later)
* MongoDB (Local installation or MongoDB Atlas)

---

# Backend Setup

Navigate to the backend directory:

```bash
cd mern-backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the development server:

```bash
npm run dev
```

---

# Frontend Setup

Navigate to the frontend directory:

```bash
cd mern-frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

Run the development server:

```bash
npm run dev
```

---

# 🔐 API Endpoints

### Authentication

Register a new user

```
POST /api/users/register
```

Login and receive JWT token

```
POST /api/users/login
```

---

### User Profile (Protected)

Retrieve authenticated user profile

```
GET /api/users/profile
```

Update profile

```
PUT /api/users/profile
```

Delete profile

```
DELETE /api/users/profile
```

---

# 🔒 Authentication Flow

1. User registers or logs in.
2. Backend generates a **JWT token**.
3. Token is stored on the client.
4. Protected routes verify the token using middleware.
5. Authorized users can access secured endpoints.

---

# 📦 Environment Variables

Backend `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Frontend `.env`

```
VITE_API_URL=http://localhost:5000/api
```

---

# 🧪 Testing the API

You can test endpoints using:

* Postman
* Insomnia
* Thunder Client

Example protected request header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# 📄 License

ISC

---

# 👨‍💻 Author

Shadrach Hingston

Full Stack Developer | MERN Stack | FastAPI | React

GitHub:
[https://github.com/Shadrach3010](https://github.com/Shadrach3010)

---

## ⭐ If you found this project useful

Give the repository a ⭐ on GitHub.

