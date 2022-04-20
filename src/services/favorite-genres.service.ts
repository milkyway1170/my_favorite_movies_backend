import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteGenre } from 'src/entities/favorite-genre.entity';
import { IGenreId } from 'src/types/genre-id.interface';
import { Repository } from 'typeorm';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(FavoriteGenre)
    private favoriteGenresIdRepository: Repository<FavoriteGenre>,
  ) {}

  findAll(): Promise<FavoriteGenre[]> {
    return this.favoriteGenresIdRepository.find();
  }

  findOne(genreId: string): Promise<FavoriteGenre> {
    return this.favoriteGenresIdRepository.findOne(genreId);
  }

  async remove(userId: string): Promise<void> {
    await this.favoriteGenresIdRepository.delete(userId);
  }

  async add({ userId, genreId }: IGenreId): Promise<void> {
    const genreList = new FavoriteGenre();
    genreList.genreId = genreId;

    await genreList.save();
  }
}
