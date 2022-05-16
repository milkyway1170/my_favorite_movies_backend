import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MovieDataInput {
  @Field()
  movieId: number;

  @Field()
  isFavorite: boolean;
}
