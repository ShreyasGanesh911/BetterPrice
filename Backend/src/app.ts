import express from 'express'
import APIError from './utils/APIError.js'
import digitalRouter from './Routes/Digital.js'
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/e",digitalRouter)
app.use(APIError)

export default app