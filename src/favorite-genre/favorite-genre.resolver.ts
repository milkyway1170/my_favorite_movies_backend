import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { FavoriteGenre } from 'src/entities/favorite-genre.entity';
import { FavoriteGenreService } from 'src/favorite-genre/favorite-genre.service';
import { CurrentUser } from 'src/guard/current-user';
import { GqlAuthGuard } from 'src/guard/gql-auth-guard';
import { JwtPayload } from 'src/sign-in/dto/sign-in.output';
import { GenreDataInput } from './dto/favorite-genre.input';

@Resolver((of) => FavoriteGenre)
export class FavoriteGenreResolver {
  constructor(private readonly favoriteGenreService: FavoriteGenreService) {}

  @UseGuards(GqlAuthGuard)
  @Query((returns) => [FavoriteGenre])
  favoriteGenresList(
    @CurrentUser() user: JwtPayload,
  ): Promise<FavoriteGenre[]> {
    return this.favoriteGenreService.findAll(user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Number)
  async deleteOrInsertGenre(
    @Args('genreData') { genreId, isFavorite }: GenreDataInput,
    @CurrentUser() user: JwtPayload,
  ): Promise<Number> {
    if (isFavorite)
      return await this.favoriteGenreService.remove(genreId, user.id);
    else return await this.favoriteGenreService.add(genreId, user.id);
  }
}
