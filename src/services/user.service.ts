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

  findOne(userId: number): Promise<User> {
    return this.usersRepository.findOne(userId);
  }

  async remove(userId: number): Promise<void> {
    await this.usersRepository.delete(userId);
  }
  
  async add(userData : IUser): Promise<void> {
    const user = new User();
    user.userId = userData.userId;
    user.login = userData.login.trim();
    user.password = userData.password.trim();
    
    await user.save();
  }
}