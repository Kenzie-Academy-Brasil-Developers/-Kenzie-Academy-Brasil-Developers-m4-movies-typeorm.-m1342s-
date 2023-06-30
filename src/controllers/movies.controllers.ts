import { Request, Response } from "express";
import { Movie } from "../entities";
import { moviesService } from "../services";
import { Pagination } from "../Interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body)
  const addMovie: Movie = await moviesService.create(req.body);

  return res.status(201).json(addMovie);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  console.log(res.locals.pagination)
  const movieList:Pagination|null = await moviesService.read(res.locals.pagination);
  
  return res.status(200).json(movieList);
};
const update=async (req: Request, res: Response): Promise<Response> =>{
const movie:Movie=await moviesService.update(res.locals.movie,req.body)
  return res.status(200).json(movie);

}

const deleteMovieController=async(req:Request,res:Response):Promise<Response>=>{
  await moviesService.deleteMovie(res.locals.movie)
  return res.status(204).json()
}

export default { create, read,update, deleteMovieController };
