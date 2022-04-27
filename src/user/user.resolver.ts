import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { NewUserInput } from './dto/new-user.input';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Query((returns) => User)
  async getUserId(@Args('login') login: string): Promise<User> {
    const user = await this.userService.findByLogin(login);
    if (!user) {
      throw new NotFoundException(login);
    }
    return user;
  }

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation((returns) => Boolean)
  async removeUser(@Args('id') id: string) {
    return this.userService.remove(id);
  }

  @Mutation((returns) => User)
  async addUser(@Args('newUser') newUser: NewUserInput): Promise<User> {
    return this.userService.add(newUser);
  }
}
