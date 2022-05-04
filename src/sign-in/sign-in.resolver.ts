import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SignInRequest } from './dto/sign-in.input';

import SignInService from './sign-in.service';

@Resolver()
export class SignInResolver {
  constructor(private readonly signInService: SignInService) {}

  @Mutation((returns) => String)
  async signIn(@Args('userData') userData: SignInRequest) {
    return this.signInService.process(userData);
  }
}
