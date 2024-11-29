import express from 'express'
import APIError from './utils/APIError.js'
import digitalRouter from './Routes/Scrap.route.js'
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/products",digitalRouter)
app.use(APIError)

export default app