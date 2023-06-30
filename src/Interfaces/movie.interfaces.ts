import {z} from "zod"
import { Movie } from "../entities"
import { DeepPartial, Repository } from "typeorm"
import { createMovieSchema } from "../schemas"

type movieCreate=z.infer<typeof createMovieSchema>
type movieRead=Array<Movie>
type movieRepository=Repository<Movie>
type movieUpdate=DeepPartial<movieCreate>

export {movieCreate,movieRead,movieRepository,movieUpdate}