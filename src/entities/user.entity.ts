import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  BaseEntity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { FavoriteGenre } from './favorite-genre.entity';
import { FavoriteMovie } from './favorite-movie.entity';

@ObjectType()
@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ unique: true })
  @Field(() => String)
  login: string;

  @Column()
  @Field(() => String)
  password: string;

  @OneToMany(() => FavoriteMovie, (movieList) => movieList.user)
  @JoinColumn()
  movieList: FavoriteMovie;

  @OneToMany(() => FavoriteGenre, (genreList) => genreList.user)
  @JoinColumn()
  genreList: FavoriteGenre;
}
