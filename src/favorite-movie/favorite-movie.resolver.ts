import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FavoriteMovie } from 'src/entities/favorite-movie.entity';
import { FavoriteMovieService } from 'src/favorite-movie/favorite-movie.service';

@Resolver((of) => FavoriteMovie)
export class FavoriteMovieResolver {
  constructor(private readonly favoriteMovieService: FavoriteMovieService) {}

  @Query((returns) => FavoriteMovie)
  async favoriteGenre(
    @Args('movieId') movieId: number,
  ): Promise<FavoriteMovie> {
    const favoriteMovie = await this.favoriteMovieService.findOne(movieId);
    if (!favoriteMovie) {
      throw new NotFoundException(movieId);
    }
    return favoriteMovie;
  }

  @Query((returns) => [FavoriteMovie])
  favoriteGenres(): Promise<FavoriteMovie[]> {
    return this.favoriteMovieService.findAll();
  }

  @Mutation((returns) => Boolean)
  async removeFavoriteMovie(@Args('movieId') movieId: number) {
    return this.favoriteMovieService.remove(movieId);
  }

  @Mutation((returns) => FavoriteMovie)
  async addFavoriteMovie(
    @Args('newFavoriteMovie') newFavoriteMovie: number,
    @Args('userId') userId: string,
  ) {
    const favoriteMovie = await this.favoriteMovieService.add(
      newFavoriteMovie,
      userId,
    );
    return favoriteMovie;
  }
}