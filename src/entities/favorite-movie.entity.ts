import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class FavoriteMovie extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  movieId: number;

  @ManyToOne(() => User, (user) => user.movieList)
  user: User;
}
