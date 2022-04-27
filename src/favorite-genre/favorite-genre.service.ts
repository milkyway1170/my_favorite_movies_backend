import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteGenre } from 'src/entities/favorite-genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FavoriteGenreService {
  constructor(
    @InjectRepository(FavoriteGenre)
    private favoriteGenresIdRepository: Repository<FavoriteGenre>,
  ) {}

  findAll(): Promise<FavoriteGenre[]> {
    return this.favoriteGenresIdRepository.find();
  }

  findOne(genreId: number): Promise<FavoriteGenre> {
    return this.favoriteGenresIdRepository.findOne(genreId);
  }

  async remove(genreId: number): Promise<void> {
    await this.favoriteGenresIdRepository.delete(genreId);
  }

  async add(genreId: number, userId: string): Promise<FavoriteGenre> {
    const genreList = new FavoriteGenre();
    genreList.genreId = genreId;
    genreList.userId = userId;

    return await genreList.save();
  }
}