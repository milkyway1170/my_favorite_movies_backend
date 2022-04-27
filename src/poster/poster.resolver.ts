import { Args, Query, Resolver } from '@nestjs/graphql';
import { PosterService } from 'src/poster/poster.service';

@Resolver()
export class PosterResolver {
  constructor(private readonly posterService: PosterService) {}

  @Query((returns) => String)
  async getPoster(@Args('posterPath') posterPath: string) {
    const path = await this.posterService.getPoster(posterPath);
    return path;
  }
}
