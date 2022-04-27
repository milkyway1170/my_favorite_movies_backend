import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field({ nullable: false })
  @Length(3, 255)
  login: string;

  @Field({ nullable: false })
  @Length(5, 255)
  password: string;
}
