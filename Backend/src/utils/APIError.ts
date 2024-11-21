import { Request, Response, NextFunction } from "express";
type Error = {
    message:string,
    statusCode:number
}
const APIError = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        message
    })

}

export default APIError;