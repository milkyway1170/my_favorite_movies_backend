import {Entity, Column, PrimaryColumn, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity {
    
    @PrimaryColumn()
    userId: number;

    @Column()
    login: string;

    @Column()
    password: string;
  
    save: any;
}