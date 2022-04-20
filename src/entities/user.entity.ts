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

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;

  @OneToMany(() => FavoriteMovie, (movieList) => movieList.user)
  @JoinColumn()
  movieList: FavoriteMovie;

  @OneToMany(() => FavoriteGenre, (genreList) => genreList.user)
  @JoinColumn()
  genreList: FavoriteGenre;
}
