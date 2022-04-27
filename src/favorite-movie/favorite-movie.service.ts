import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteMovie } from 'src/entities/favorite-movie.entity';
import { Repository } from 'typeorm';

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
    return this.favoriteMoviesIdRepository.findOne(movieId);
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
