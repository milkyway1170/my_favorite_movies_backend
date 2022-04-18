import {Entity, Column, PrimaryColumn, BaseEntity} from "typeorm";

@Entity()
export class FavoriteGenre extends BaseEntity {

    @PrimaryColumn()
    userId: number;

    @Column("int", { array: true })
    genreId: number[];
}