import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FavoriteGenre } from './entities/favorite-genre.entity';
import { FavoriteMovie } from './entities/favorite-movie.entity';
import { User } from './entities/user.entity';
import { FavoriteGenreModule } from './favorite-genre/favorite-genre.module';
import { FavoriteMovieModule } from './favorite-movie/favorite-movie.module';
import { FilterModule } from './filter/filter.module';
import { GenreModule } from './genre/genre.module';
import { MovieModule } from './movie/movie.module';
import { PosterModule } from './poster/poster.module';
import { SignInModule } from './sign-in/sign-in.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([User, FavoriteMovie, FavoriteGenre]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    SignInModule,
    PosterModule,
    MovieModule,
    GenreModule,
    FilterModule,
    FavoriteMovieModule,
    FavoriteGenreModule,
  ],
})
export class AppModule {}
