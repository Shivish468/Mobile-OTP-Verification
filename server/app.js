import express from 'express'
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'

const app = express()

// CORS Policy
app.use(cors())

// JSON
app.use(express.json())

// Load Routes
app.use("/api/user", userRoutes)

export default app;