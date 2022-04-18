import {Entity, Column, PrimaryColumn, BaseEntity, OneToOne, JoinColumn} from "typeorm";
import { FavoriteGenre } from "./favorite-genre.entity";
import { FavoriteMovie } from "./favorite-movie.entity";

@Entity()
export class User extends BaseEntity {
    
    @PrimaryColumn()
    userId: number;

    @Column()
    login: string;

    @Column()
    password: string;
    
    @OneToOne(() => FavoriteMovie, movieList => movieList.user)
    @JoinColumn()
    movieList: FavoriteMovie;

    @OneToOne(() => FavoriteGenre, genreList => genreList.user)
    @JoinColumn()
    genreList: FavoriteGenre;
}       