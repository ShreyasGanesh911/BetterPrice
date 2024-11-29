import express from "express"
import { scrapData } from "../controller/index.js"

const digitalRouter = express.Router()

digitalRouter.get("/findproducts",scrapData)
export default digitalRouter