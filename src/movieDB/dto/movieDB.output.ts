import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Genre {
  @Field()
  id: number;
  @Field()
  name: string;
}

@ObjectType()
export class PosterPath {
  @Field()
  posterPath: string;
}
@ObjectType()
export class MovieData {
  @Field()
  id: number;
  @Field()
  title: string;
  @Field()
  overview: string;
  @Field()
  poster_path: string;
}
