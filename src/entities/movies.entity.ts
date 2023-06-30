import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { nullable } from "zod";

@Entity("movies")

class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({length:50,unique:true,nullable:false})
  name: string;

  @Column({type:"text",nullable:true})

  description: string|undefined;
  
  @Column({type:"integer"})
  duration: number;

  @Column({type:"integer",nullable:false})
  price: number;
}

export default Movie;
