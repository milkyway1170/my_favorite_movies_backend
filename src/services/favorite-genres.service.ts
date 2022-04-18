import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteGenre } from 'src/entities/favorite-genre.entity';
import { IGenreId } from 'src/types/genre-id.interface';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(FavoriteGenre)
    private usersRepository: Repository<FavoriteGenre>,
  ) {}

  findAll(): Promise<FavoriteGenre[]> {
    return this.usersRepository.find();
  }

  findOne(userId: number): Promise<FavoriteGenre> {
    return this.usersRepository.findOne(userId);
  }

  async remove(userId: number): Promise<void> {
    await this.usersRepository.delete(userId);
  }
  
  async add(genreListData:IGenreId): Promise<void> {
    const genreList = new FavoriteGenre();
    genreList.userId = genreListData.userId;
    genreList.genreId = genreListData.genreId;
    
    await genreList.save();
  }
}