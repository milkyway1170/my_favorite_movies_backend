import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GenreDataInput {
  @Field()
  genreId: number;

  @Field()
  isFavorite: boolean;
}
