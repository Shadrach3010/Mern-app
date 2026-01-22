# MERN JWT Authentication Hub

A modern, captivating JWT authentication system built with React (Vite) and Node.js (Express). This project features a glassmorphic UI, robust security defaults, and centralized state management.

## 🚀 Features
- **Modern UI**: Glassmorphism and animated gradients using Vanilla CSS.
- **JWT Auth**: Secure registration, login, and route protection.
- **Captivating Dashboard**: Interactive stats grid and activity logs.
- **Hardened Backend**: Centralized error handling and security middleware.

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite, Axios, React Router 7.
- **Backend**: Node.js, Express 5, MongoDB (Mongoose), JSON Web Tokens, BcryptJS.

## ⚡ Quick Start

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)

### 2. Setup Backend
```bash
cd mern-backend
npm install
# Create .env based on .env.example
npm run dev
```

### 3. Setup Frontend
```bash
cd mern-frontend
npm install
# Create .env based on .env.example
npm run dev
```

## 🔐 API Endpoints
- `POST /api/users/register` - New user registration.
- `POST /api/users/login` - User login & token generation.
- `GET /api/users/profile` - Get logged-in user profile (Protected).

## 📄 License
ISC
