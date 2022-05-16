import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewUserInput } from './dto/user.input';

import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findById(userId: string): Promise<User> {
    const user = this.usersRepository.findOne({ id: userId });
    if (!user) {
      throw new NotFoundException(userId);
    }
    return user;
  }

  findByLogin(login: string): Promise<User> {
    const user = this.usersRepository.findOne({ login });
    if (!user) {
      throw new NotFoundException(login);
    }
    return user;
  }

  async remove(userId: string): Promise<void> {
    await this.usersRepository.delete(userId);
  }

  async createUser({ login, password }: NewUserInput): Promise<User> {
    const isLogin = await this.findByLogin(login);
    if (!isLogin) {
      const user = new User();
      user.login = login.trim();
      user.password = password.trim();
      return await user.save();
    }
  }
}
