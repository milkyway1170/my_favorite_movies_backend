import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewUserInput {
  @Field({ nullable: false })
  login: string;

  @Field({ nullable: false })
  password: string;
}
