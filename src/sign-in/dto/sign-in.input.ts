import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class SignInRequest {
  @Field()
  login: string;

  @Field()
  password: string;
}

@ObjectType()
export class JwtPayload {
  @Field()
  id: string;
  @Field()
  login: string;
}

@ObjectType()
export class AuthResponse {
  @Field()
  token: string;

  @Field()
  user: JwtPayload;
}
