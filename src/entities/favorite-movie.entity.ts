import {Entity, PrimaryColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class FavoriteMovie extends BaseEntity {

    @PrimaryColumn()
    userId: number;

    @Column("int", { array: true })
    movieId: number[];
}