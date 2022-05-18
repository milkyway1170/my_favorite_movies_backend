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
    return this.favoriteMoviesIdRepository.find({
      order: { movieId: 'DESC', id: 'DESC' },
      where: { userId },
    });
  }

  async edite(movieId: number, userId: string): Promise<FavoriteMovie> {
    const favoriteMovie = await this.favoriteMoviesIdRepository.findOne({
      movieId,
      userId,
    });
    console.log('\n\n\n\n\n\nedite');
    if (!favoriteMovie) {
      throw new NotFoundException(movieId);
    }
    favoriteMovie.isWatched = !favoriteMovie.isWatched;
    await favoriteMovie.save();
    return await favoriteMovie;
  }

  async remove(movieId: number, userId: string): Promise<number> {
    await this.favoriteMoviesIdRepository.delete({
      movieId,
      userId,
    });
    return await movieId;
  }

  async add(
    movieId: number,
    userId: string,
    isWatched: boolean,
  ): Promise<number> {
    const movieList = new FavoriteMovie();
    movieList.movieId = movieId;
    movieList.userId = userId;
    movieList.isWatched = isWatched;
    await movieList.save();
    return await movieId;
  }
}
