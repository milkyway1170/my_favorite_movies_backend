import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FavoriteGenre } from 'src/entities/favorite-genre.entity';
import { FavoriteGenreService } from 'src/favorite-genre/favorite-genre.service';

@Resolver((of) => FavoriteGenre)
export class FavoriteGenreResolver {
  constructor(private readonly favoriteGenreService: FavoriteGenreService) {}

  @Query((returns) => FavoriteGenre)
  async favoriteGenre(
    @Args('genreId') genreId: number,
  ): Promise<FavoriteGenre> {
    const favoriteGenre = await this.favoriteGenreService.findOne(genreId);
    if (!favoriteGenre) {
      throw new NotFoundException(genreId);
    }
    return favoriteGenre;
  }

  @Query((returns) => [FavoriteGenre])
  favoriteGenres(): Promise<FavoriteGenre[]> {
    return this.favoriteGenreService.findAll();
  }

  @Mutation((returns) => Boolean)
  async removeFavoriteGenre(@Args('genreId') genreId: number) {
    return this.favoriteGenreService.remove(genreId);
  }

  @Mutation((returns) => FavoriteGenre)
  async addFavoriteGenre(
    @Args('newFavoriteGenre') newFavoriteGenre: number,
    @Args('userId') userId: string,
  ): Promise<FavoriteGenre> {
    const favoriteGenre = await this.favoriteGenreService.add(
      newFavoriteGenre,
      userId,
    );
    return favoriteGenre;
  }
}
