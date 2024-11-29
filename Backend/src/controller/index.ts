import { Request,Response,NextFunction } from "express";
import "dotenv/config"
import AsyncHandler from "../utils/AsyncHandler.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import scrap from "../utils/Scrap.js";
import { amazonAttributes as amazon, flipkartAttributes as flipkart } from "../assets/attributes.js";
const success = true

export const scrapData = AsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {product} = req.query
    if(!product)    
         return next(new ErrorHandler("Product name not provided",400))

    const FlipkartData = await scrap(`${process.env.FLIPKART_LINK}${product}`,flipkart)
    const AmazonData = await scrap(`${process.env.AMAZON_LINK}${product}`,amazon)
    return res.status(200).json({success,message:"Data Scraped Successfully",product,AmazonData,FlipkartData});
})