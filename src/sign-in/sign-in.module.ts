import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from './sign-in-jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import SignInService from './sign-in.service';
import { SignInResolver } from './sign-in.resolver';

@Module({
  imports: [UserModule, PassportModule],
  providers: [SignInService, JwtStrategy, SignInResolver],
  exports: [PassportModule, JwtModule],
})
export class SignInModule {}
