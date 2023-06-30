import { Request,Response,NextFunction } from "express";
import {movieRepository} from "../Interfaces/movie.interfaces"
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";

const idExistance=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
const repository:movieRepository=AppDataSource.getRepository(Movie)
const id:number=Number(req.params.id)

const moviesExistance:Movie|null=await repository.findOne({where:{id}})
if (!moviesExistance) throw new AppError("Movie not found",404)
res.locals={...res.locals,movie:moviesExistance}

return next()

}

export default idExistance