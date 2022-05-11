import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { Genre, MovieData, PosterPath } from './dto/movieDB.output';
import { FilterSettingInput, SettingInput } from './dto/movieDB.input';
import { isNotEmpty } from 'class-validator';

@Injectable()
export class MovieDBService {
  constructor(private configService: ConfigService) {}

  private movieDBClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
      api_key: this.configService.get<string>('API_KEY'),
      language: 'en-EN',
    },
  });

  async getGenres(): Promise<Genre[]> {
    const response = await this.movieDBClient.get('/genre/movie/list');
    return await response.data.genres;
  }

  async getMovieData(movieId): Promise<MovieData> {
    const response = await this.movieDBClient.get('/movie/' + movieId);
    return response.data;
  }

  async getSearchList({
    year,
    page,
    rating,
    genres,
  }: SettingInput): Promise<MovieData[]> {
    let filterUrlPart = '';
    if (page) {
      filterUrlPart += '&page=' + page.toString();
    }
    if (year) {
      filterUrlPart += '&primary_release_year=' + year.toString();
    }
    if (rating) {
      filterUrlPart += '&vote_average.gte=' + rating.toString();
    }
    if (genres) {
      filterUrlPart += '&with_genres=';
      genres.forEach((genre) => (filterUrlPart += genre + '%2C%20'));
    }
    const response = await this.movieDBClient.get(
      (process.env.API_GET_DISCOVER ?? '') +
        (process.env.API_KEY ?? '') +
        '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false' +
        filterUrlPart +
        '&with_watch_monetization_types=flatrate',
    );

    return response.data.results;
  }
}
