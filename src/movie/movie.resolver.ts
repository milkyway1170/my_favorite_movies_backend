import { Args, Query, Resolver } from '@nestjs/graphql';

import { MovieService } from 'src/movie/movie.service';

@Resolver()
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query((returns) => String)
  async getMovieData(@Args('movieId') movieId: number) {
    return this.movieService.getMovieData(movieId);
  }
}
