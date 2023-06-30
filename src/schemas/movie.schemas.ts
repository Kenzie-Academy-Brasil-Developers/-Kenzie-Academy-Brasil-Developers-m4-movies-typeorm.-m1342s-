import {z} from "zod"


const movieSchema=z.object({
    id:z.number().positive(),
    name:z.string().max(50).nonempty(),
    description:z.string().optional(),
    duration:z.number().int().positive(),
    price:z.number().int().positive()
})
const createMovieSchema=movieSchema.omit({id:true})
const updateMovieSchema=movieSchema.partial()

export {movieSchema,createMovieSchema,updateMovieSchema}