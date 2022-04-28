import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field({ nullable: false })
  login: string;

  @Field({ nullable: false })
  password: string;
}
