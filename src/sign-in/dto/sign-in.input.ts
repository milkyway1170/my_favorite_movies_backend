import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignInRequest {
  @Field()
  login: string;

  @Field()
  password: string;
}

export interface JwtPayload {
  id: string;
  login: string;
}

export interface AuthResponse {
  token: string;
  user: JwtPayload;
}
