import { Router } from "express";
import { moviesControllers } from "../controllers";
import middlewares from "../middlewares";
import { createMovieSchema, updateMovieSchema } from "../schemas/movie.schemas";


const movieRouter:Router=Router()

movieRouter.post("",middlewares.validateBody(createMovieSchema),middlewares.verifyNameExistance,moviesControllers.create)
movieRouter.get("",middlewares.pagination,moviesControllers.read)
movieRouter.patch("/:id",middlewares.validateBody(updateMovieSchema),middlewares.verifyNameExistance,middlewares.idExistance,moviesControllers.update)
movieRouter.delete("/:id",middlewares.idExistance,moviesControllers.deleteMovieController)

export default movieRouter