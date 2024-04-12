import { NextFunction, Request, Response } from "express";

export default interface IAuthMiddleware{
    verifyToken(req:Request,res:Response,next:NextFunction):void|Response
}