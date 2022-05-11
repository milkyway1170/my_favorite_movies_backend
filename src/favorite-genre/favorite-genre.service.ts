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

  findAll(userId: string): Promise<FavoriteGenre[]> {
    return this.favoriteGenresIdRepository.find({ userId: userId });
  }

  findOne(genreId: number): Promise<FavoriteGenre> {
    const favoriteGenre = this.favoriteGenresIdRepository.findOne({ genreId });
    if (!favoriteGenre) {
      throw new NotFoundException(genreId);
    }
    return favoriteGenre;
  }

  async remove(genreId: number, userId: string): Promise<void> {
    await this.favoriteGenresIdRepository.delete({
      genreId: genreId,
      userId: userId,
    });
  }

  async add(genreId: number, userId: string): Promise<FavoriteGenre> {
    const genreList = new FavoriteGenre();
    genreList.genreId = genreId;
    genreList.userId = userId;

    return await genreList.save();
  }
}
