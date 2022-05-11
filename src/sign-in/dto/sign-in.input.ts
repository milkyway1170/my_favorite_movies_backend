import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignInRequest {
  @Field()
  login: string;

  @Field()
  password: string;
}
