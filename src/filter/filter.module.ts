import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { FilterResolver } from 'src/filter/filter.resolver';
import { FilterService } from 'src/filter/filter.service';

@Module({
  imports: [HttpModule],
  providers: [FilterResolver, FilterService],
})
export class FilterModule {}
