import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { movieRepository } from "../Interfaces";
import { Movie } from "../entities";
import { AppError } from "../errors";

const verifyNameExistance=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    const repository:movieRepository=AppDataSource.getRepository(Movie)
    const name:string=req.body.name

    if (!name) return next()
    const NameExistance:boolean=await repository.exist({where:{name}})
    
    if (NameExistance) throw new AppError("Movie already exists.",409)
    
    return next()

}

export default verifyNameExistance
