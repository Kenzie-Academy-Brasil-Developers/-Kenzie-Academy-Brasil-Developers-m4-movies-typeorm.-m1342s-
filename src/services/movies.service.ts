import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import {movieCreate,movieRead,movieRepository,movieUpdate} from "../Interfaces/movie.interfaces"
import { Pagination, PaginationParams } from "../Interfaces";

const create = async(body:movieCreate):Promise<any> => {
  console.log(body)
  const repository: Repository<Movie> = AppDataSource.getRepository(Movie);
  const newMovie: Movie = repository.create(body);
  await repository.save(newMovie)

  return newMovie;
};

const read = async ({page,perPage,order,sort, prevPage,nextPage}:PaginationParams): Promise<Pagination|null> => {
  const repository: Repository<Movie> = AppDataSource.getRepository(Movie);
  const [movies,count]:[Movie[], number]= await repository.findAndCount({
    order:{[sort]:order},
    skip:Number(page),
    take:perPage
  })


  return {
    prevPage,
    nextPage,
    count,
    data:movies
  }

};
const update=async(movie:Movie,payload:movieUpdate):Promise<Movie>=>{
  const repository:movieRepository=AppDataSource.getRepository(Movie)
  const editMovie:Movie=repository.create({...movie,...payload})
  await repository.save(editMovie)

  return editMovie
}
const deleteMovie=async(movie:Movie):Promise<void>=>{
const repository:movieRepository=AppDataSource.getRepository(Movie)
await repository.remove(movie)
}
export default {create,read,update,deleteMovie}