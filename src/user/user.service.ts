import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { NewUserInput } from './dto/new-user.input';

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
    return this.usersRepository.findOne({ where: { id: userId } });
  }

  findByLogin(login: string): Promise<User> {
    return this.usersRepository.findOne({ where: { login: login } });
  }

  async remove(userId: string): Promise<void> {
    await this.usersRepository.delete(userId);
  }

  async add({ login, password }: NewUserInput): Promise<User> {
    const isLogin = await this.findByLogin(login);
    if (typeof isLogin === 'undefined') {
      const user = new User();
      user.login = login.trim();
      user.password = password.trim();
      return await user.save();
    }
  }
}
