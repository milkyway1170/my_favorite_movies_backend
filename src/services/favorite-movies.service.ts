import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteMovie } from 'src/entities/favorite-movie.entity';
import { IMovieId } from 'src/types/movie-id.interface';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(FavoriteMovie)
    private moviesIdRepository: Repository<FavoriteMovie>,
  ) {}

  findAll(): Promise<FavoriteMovie[]> {
    return this.moviesIdRepository.find();
  }

  findOne(userId: number): Promise<FavoriteMovie> {
    return this.moviesIdRepository.findOne(userId);
  }

  async remove(userId: number): Promise<void> {
    await this.moviesIdRepository.delete(userId);
  }
  
  async add(movieListData:IMovieId): Promise<void> {
    const movieList = new FavoriteMovie();
    movieList.userId = movieListData.userId;
    movieList.movieId = movieListData.movieId;
    
    await movieList.save();
  }
}