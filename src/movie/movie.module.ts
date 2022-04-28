import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { MovieResolver } from 'src/movie/movie.resolver';
import { MovieService } from 'src/movie/movie.service';

@Module({
  imports: [HttpModule],
  providers: [MovieResolver, MovieService],
})
export class MovieModule {}
