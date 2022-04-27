import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@ObjectType()
@Entity({ name: 'favorite_genres' })
export class FavoriteGenre extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ name: 'user_id' })
  @Field(() => String)
  userId: string;

  @Column({ name: 'genre_id' })
  @Field(() => Number)
  genreId: number;

  @ManyToOne(() => User, (user) => user.genreList)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
