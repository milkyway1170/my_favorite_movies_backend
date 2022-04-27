import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GenreResolver } from 'src/genre/genre.resolver';
import { GenreService } from 'src/genre/genre.service';

@Module({
  imports: [HttpModule],
  providers: [GenreResolver, GenreService],
})
export class GenreModule {}
