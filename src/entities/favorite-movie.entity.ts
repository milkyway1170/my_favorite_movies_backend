import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@ObjectType()
@Entity({ name: 'favorite_movies' })
export class FavoriteMovie extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ name: 'user_id' })
  @Field(() => String)
  userId: string;

  @Column({ name: 'movie_id' })
  @Field(() => Number)
  movieId: number;

  @ManyToOne(() => User, (user) => user.movieList)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
