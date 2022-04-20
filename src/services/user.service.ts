import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { IUser } from 'src/types/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(userId: string): Promise<User> {
    return this.usersRepository.findOne(userId);
  }

  async remove(userId: string): Promise<void> {
    await this.usersRepository.delete(userId);
  }

  async add({ userId, login, password }: IUser): Promise<void> {
    if (!this.findOne(userId)) {
      const user = new User();
      user.id = userId;
      user.login = login.trim();
      user.password = password.trim();

      await user.save();
    }
  }
}
