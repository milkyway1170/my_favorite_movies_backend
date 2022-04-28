import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FavoriteGenre } from 'src/entities/favorite-genre.entity';
import { FavoriteGenreResolver } from 'src/favorite-genre/favorite-genre.resolver';
import { FavoriteGenreService } from 'src/favorite-genre/favorite-genre.service';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteGenre])],
  providers: [FavoriteGenreResolver, FavoriteGenreService],
})
export class FavoriteGenreModule {}
