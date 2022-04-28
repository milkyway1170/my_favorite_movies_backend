import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FavoriteMovie } from 'src/entities/favorite-movie.entity';
import { FavoriteMovieResolver } from 'src/favorite-movie/favorite-movie.resolver';
import { FavoriteMovieService } from 'src/favorite-movie/favorite-movie.service';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteMovie])],
  providers: [FavoriteMovieResolver, FavoriteMovieService],
})
export class FavoriteMovieModule {}
