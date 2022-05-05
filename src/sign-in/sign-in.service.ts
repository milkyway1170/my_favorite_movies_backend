import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/entities/user.entity';
import { AuthResponse, SignInRequest } from '../sign-in/dto/sign-in.input';
import { UserService } from 'src/user/user.service';

@Injectable()
export default class SignInService {
  private user: User | undefined;

  constructor(
    private readonly jwtService: JwtService,
    private userService: UserService,
  ) {}

  async process(userData: SignInRequest): Promise<AuthResponse> {
    this.user = await this.userService.findByLogin(userData.login.trim());

    if (this.user && userData.password == this.user.password) {
      const payload = {
        id: this.user.id,
        login: this.user.login,
      };

      return {
        token: this.jwtService.sign({
          ...payload,
        }),
        user: payload,
      };
    } else {
      return undefined;
    }
  }
}
