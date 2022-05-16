import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

import { FavoriteMovie } from 'src/entities/favorite-movie.entity';

@Injectable()
export class FavoriteMovieService {
  constructor(
    @InjectRepository(FavoriteMovie)
    private favoriteMoviesIdRepository: Repository<FavoriteMovie>,
  ) {}

  findAll(userId: string): Promise<FavoriteMovie[]> {
    return this.favoriteMoviesIdRepository.find({ userId });
  }

  findOne(movieId: number): Promise<FavoriteMovie> {
    const favoriteMovie = this.favoriteMoviesIdRepository.findOne({ movieId });
    if (!favoriteMovie) {
      throw new NotFoundException(movieId);
    }
    return favoriteMovie;
  }

  async remove(movieId: number, userId: string): Promise<number> {
    await this.favoriteMoviesIdRepository.delete({
      movieId,
      userId,
    });
    return await movieId;
  }

  async add(movieId: number, userId: string): Promise<number> {
    const movieList = new FavoriteMovie();
    movieList.movieId = movieId;
    movieList.userId = userId;
    await movieList.save();
    return await movieId;
  }
}
