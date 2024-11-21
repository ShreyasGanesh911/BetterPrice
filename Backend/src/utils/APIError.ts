import { Request, Response, NextFunction } from "express";
type Error = {
    message:string,
    status:number
}
const APIError = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res.status(status).json({
        success:false,
        message
    })

}

export default APIError;