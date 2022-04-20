import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteGenre } from './entities/favorite-genre.entity';
import { FavoriteMovie } from './entities/favorite-movie.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([User, FavoriteMovie, FavoriteGenre]),
  ],
  providers: [],
})
export class AppModule {}
