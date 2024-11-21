import express from 'express'
import APIError from './utils/APIError.js'
const app = express()
app.use(express.json())

app.use(APIError)

export default app