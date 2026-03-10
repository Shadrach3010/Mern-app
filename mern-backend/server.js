import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"

import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

dotenv.config()
connectDB()

const app = express()

//Middleware
app.use(cors({
    origin: "https://mern-app-six-dusky.vercel.app",
    credentials: true
}))
app.use(express.json())

//Test route
app.get("/", (req, res) => {
    res.send("API is running...")
})

//Routes
app.use("/api/users", userRoutes);

//Error Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})