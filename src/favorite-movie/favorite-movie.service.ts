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

  findAll(): Promise<FavoriteMovie[]> {
    return this.favoriteMoviesIdRepository.find();
  }

  findOne(movieId: number): Promise<FavoriteMovie> {
    const favoriteMovie = this.favoriteMoviesIdRepository.findOne({ movieId });
    if (!favoriteMovie) {
      throw new NotFoundException(movieId);
    }
    return favoriteMovie;
  }

  async remove(movieId: number): Promise<void> {
    await this.favoriteMoviesIdRepository.delete(movieId);
  }

  async add(movieId: number, userId: string): Promise<FavoriteMovie> {
    const movieList = new FavoriteMovie();
    movieList.movieId = movieId;
    movieList.userId = userId;
    return await movieList.save();
  }
}
