import { Query, Resolver } from '@nestjs/graphql';

import { GenreService } from 'src/genre/genre.service';

@Resolver()
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}

  @Query((returns) => String)
  async getGenres() {
    return this.genreService.getGenres();
  }
}
