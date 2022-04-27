import { Query, Resolver } from '@nestjs/graphql';
import { GenreService } from 'src/genre/genre.service';

@Resolver()
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}

  @Query((returns) => String)
  async getGenres() {
    const genreList = await this.genreService.getGenres();
    return genreList;
  }
}
