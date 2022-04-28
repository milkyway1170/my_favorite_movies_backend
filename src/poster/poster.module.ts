import { Module } from '@nestjs/common';

import { PosterResolver } from 'src/poster/poster.resolver';
import { PosterService } from 'src/poster/poster.service';

@Module({
  providers: [PosterResolver, PosterService],
})
export class PosterModule {}
