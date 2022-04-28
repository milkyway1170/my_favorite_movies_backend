import { Args, Query, Resolver } from '@nestjs/graphql';

import { FilterService } from 'src/filter/filter.service';
import { FilterSettingInput } from './dto/get-movie-list.input';

@Resolver()
export class FilterResolver {
  constructor(private readonly filterService: FilterService) {}

  @Query((returns) => String)
  async getMoviesList(
    @Args('filterSetting') filterSetting: FilterSettingInput,
  ) {
    return this.filterService.getMoviesList(filterSetting);
  }
}
