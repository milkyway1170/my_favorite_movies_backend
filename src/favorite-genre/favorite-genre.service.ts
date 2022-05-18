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

  async remove(genreId: number, userId: string): Promise<number> {
    await this.favoriteGenresIdRepository.delete({
      genreId: genreId,
      userId: userId,
    });
    return await genreId;
  }

  async add(genreId: number, userId: string): Promise<number> {
    const genreList = new FavoriteGenre();
    genreList.genreId = genreId;
    genreList.userId = userId;
    await genreList.save();

    return await genreId;
  }
}
