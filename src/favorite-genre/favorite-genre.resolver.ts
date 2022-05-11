import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { FavoriteGenre } from 'src/entities/favorite-genre.entity';
import { FavoriteGenreService } from 'src/favorite-genre/favorite-genre.service';
import { CurrentUser } from 'src/guard/current-user';
import { GqlAuthGuard } from 'src/guard/gql-auth-guard';
import { JwtPayload } from 'src/sign-in/dto/sign-in.output';

@Resolver((of) => FavoriteGenre)
export class FavoriteGenreResolver {
  constructor(private readonly favoriteGenreService: FavoriteGenreService) {}

  @Query((returns) => FavoriteGenre)
  async favoriteGenre(
    @Args('genreId') genreId: number,
  ): Promise<FavoriteGenre> {
    return this.favoriteGenreService.findOne(genreId);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => [FavoriteGenre])
  favoriteGenresList(
    @CurrentUser() user: JwtPayload,
  ): Promise<FavoriteGenre[]> {
    return this.favoriteGenreService.findAll(user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Boolean)
  async removeFavoriteGenre(
    @Args('genreId') genreId: number,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.favoriteGenreService.remove(genreId, user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => FavoriteGenre)
  async addFavoriteGenre(
    @Args('newFavoriteGenre') newFavoriteGenre: number,
    @CurrentUser() user: JwtPayload,
  ): Promise<FavoriteGenre> {
    return this.favoriteGenreService.add(newFavoriteGenre, user.id);
  }
}
