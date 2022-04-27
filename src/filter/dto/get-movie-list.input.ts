import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class FilterSettingInput {
  @Field()
  page?: number;

  @Field()
  year?: number;

  @Field()
  rating?: number;

  @Type(() => String)
  @Field((type) => [String])
  genres?: string[];
}
