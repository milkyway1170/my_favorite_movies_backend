import { Args, Query, Resolver } from '@nestjs/graphql';

import { MovieDBService } from 'src/movieDB/movieDB.service';
import { SettingInput } from './dto/movieDB.input';
import { Genre, MovieData, PosterPath } from './dto/movieDB.output';

@Resolver()
export class MovieDBResolver {
  constructor(private movieDBService: MovieDBService) {}

  @Query((returns) => [Genre])
  async getGenres(): Promise<Genre[]> {
    return await this.movieDBService.getGenres();
  }

  @Query((returns) => MovieData)
  async getMovieData(@Args('movieId') movieId: string): Promise<MovieData> {
    return await this.movieDBService.getMovieData(movieId);
  }

  @Query((returns) => [MovieData])
  async getSearchingMoviesList(
    @Args('searchingSettings') searchingSettings: SettingInput,
  ): Promise<MovieData[]> {
    return await this.movieDBService.getSearchList(searchingSettings);
  }
}
