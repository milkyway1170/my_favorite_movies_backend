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
    return this.favoriteMoviesIdRepository.find({ userId: userId });
  }

  findOne(movieId: number): Promise<FavoriteMovie> {
    const favoriteMovie = this.favoriteMoviesIdRepository.findOne({ movieId });
    if (!favoriteMovie) {
      throw new NotFoundException(movieId);
    }
    return favoriteMovie;
  }

  async remove(movieId: number, userId: string): Promise<void> {
    await this.favoriteMoviesIdRepository.delete({
      movieId: movieId,
      userId: userId,
    });
  }

  async add(movieId: number, userId: string): Promise<FavoriteMovie> {
    const movieList = new FavoriteMovie();
    movieList.movieId = movieId;
    movieList.userId = userId;

    return await movieList.save();
  }
}
