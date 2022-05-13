import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

import { FavoriteGenre } from 'src/entities/favorite-genre.entity';

@Injectable()
export class FavoriteGenreService {
  constructor(
    @InjectRepository(FavoriteGenre)
    private favoriteGenresIdRepository: Repository<FavoriteGenre>,
  ) {}

  async findAll(userId: string): Promise<FavoriteGenre[]> {
    return await this.favoriteGenresIdRepository.find({ userId: userId });
  }

  findOne(genreId: number): Promise<FavoriteGenre> {
    const favoriteGenre = this.favoriteGenresIdRepository.findOne({ genreId });
    if (!favoriteGenre) {
      throw new NotFoundException(genreId);
    }
    return favoriteGenre;
  }

  async remove(genreId: number, userId: string): Promise<string> {
    await this.favoriteGenresIdRepository.delete({
      genreId: genreId,
      userId: userId,
    });
    return await userId;
  }

  async add(genreId: number, userId: string): Promise<string> {
    const genreList = new FavoriteGenre();
    genreList.genreId = genreId;
    genreList.userId = userId;
    await genreList.save();

    return await userId;
  }
}
