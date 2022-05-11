import { Field, ObjectType } from '@nestjs/graphql';

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
