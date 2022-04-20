import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class FavoriteGenre extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  genreId: number;

  @ManyToOne(() => User, (user) => user.genreList)
  user: User;
}
