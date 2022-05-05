import { Module } from '@nestjs/common';
import {} from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { SignInResolver } from './sign-in.resolver';
import SignInService from './sign-in.service';
import JwtModule from 'jwt-module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule,
    TypeOrmModule.forFeature([User]),
  ],
  providers: [SignInService, UserService, SignInResolver],
})
export class SignInModule {}
