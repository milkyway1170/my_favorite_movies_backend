import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthResponse } from './dto/sign-in.output';
import { SignInRequest } from './dto/sign-in.input';
import SignInService from './sign-in.service';

@Resolver()
export class SignInResolver {
  constructor(private readonly signInService: SignInService) {}

  @Mutation((returns) => AuthResponse)
  async signIn(
    @Args('userData') userData: SignInRequest,
  ): Promise<AuthResponse> {
    return this.signInService.login(userData);
  }
}
