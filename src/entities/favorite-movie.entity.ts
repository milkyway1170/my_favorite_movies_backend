import {Entity, PrimaryColumn, Column, BaseEntity, OneToOne} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class FavoriteMovie extends BaseEntity {

    @PrimaryColumn()
    userId: number;

    @Column("int", { array: true })
    movieId: number[];

    @OneToOne(() => User, user => user.movieList) 
    user: User;
}