import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { MovieDBResolver } from 'src/movieDB/movieDB.resolver';
import { MovieDBService } from 'src/movieDB/movieDB.service';

@Module({
  providers: [MovieDBResolver, MovieDBService, ConfigService],
})
export class MovieDBModule {}
