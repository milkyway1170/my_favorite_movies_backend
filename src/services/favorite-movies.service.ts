import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteMovie } from 'src/entities/favorite-movie.entity';
import { IMovieId } from 'src/types/movie-id.interface';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(FavoriteMovie)
    private favoriteMoviesIdRepository: Repository<FavoriteMovie>,
  ) {}

  findAll(): Promise<FavoriteMovie[]> {
    return this.favoriteMoviesIdRepository.find();
  }

  findOne(movieId: string): Promise<FavoriteMovie> {
    return this.favoriteMoviesIdRepository.findOne(movieId);
  }

  async remove(movieId: string): Promise<void> {
    await this.favoriteMoviesIdRepository.delete(movieId);
  }

  async add(movieId: number): Promise<void> {
    const movieList = new FavoriteMovie();
    movieList.movieId = movieId;

    await movieList.save();
  }
}
