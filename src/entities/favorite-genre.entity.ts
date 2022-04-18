import {Entity, Column, PrimaryColumn, BaseEntity, JoinColumn, OneToOne} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class FavoriteGenre extends BaseEntity {

    @PrimaryColumn()
    userId: number;

    @Column("int", { array: true })
    genreId: number[];

    @OneToOne(() => User, user => user.genreList) 
    user: User;
}