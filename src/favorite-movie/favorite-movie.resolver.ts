import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { FavoriteMovie } from 'src/entities/favorite-movie.entity';
import { FavoriteMovieService } from 'src/favorite-movie/favorite-movie.service';
import { CurrentUser } from 'src/guard/current-user';
import { GqlAuthGuard } from 'src/guard/gql-auth-guard';
import { JwtPayload } from 'src/sign-in/dto/sign-in.output';

@Resolver((of) => FavoriteMovie)
export class FavoriteMovieResolver {
  constructor(private readonly favoriteMovieService: FavoriteMovieService) {}

  @Query((returns) => FavoriteMovie)
  async favoriteMovie(
    @Args('movieId') movieId: number,
  ): Promise<FavoriteMovie> {
    return this.favoriteMovieService.findOne(movieId);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => [FavoriteMovie])
  favoriteMoviesList(
    @CurrentUser() user: JwtPayload,
  ): Promise<FavoriteMovie[]> {
    return this.favoriteMovieService.findAll(user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Boolean)
  async removeFavoriteMovie(
    @Args('movieId') movieId: number,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.favoriteMovieService.remove(movieId, user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => FavoriteMovie)
  async addFavoriteMovie(
    @Args('newFavoriteMovie') newFavoriteMovie: number,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.favoriteMovieService.add(newFavoriteMovie, user.id);
  }
}
