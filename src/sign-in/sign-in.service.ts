import { Injectable, NotFoundException } from '@nestjs/common';
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
    const { id, login, password } = await this.userService.findByLogin(
      userData.login.trim(),
    );

    const payload = {
      id,
      login,
    };
    if (login && userData.password === password) {
      return {
        token: this.jwtService.sign({
          ...payload,
        }),
        user: payload,
      };
    } else {
      throw new NotFoundException('Wrong credentials');
    }
  }
}
