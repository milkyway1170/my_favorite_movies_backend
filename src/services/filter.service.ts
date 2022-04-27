import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { IGetMoviesList } from 'src/types/filter.interface';

@Injectable()
export class FilterService {
  constructor(private httpService: HttpService) {}

  getMoviesList({
    year,
    page,
    rating,
    genres,
  }: IGetMoviesList): Observable<AxiosResponse<object>> {
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
    return this.httpService
      .get(
        (process.env.API_GET_DISCOVER ?? '') +
          (process.env.API_KEY ?? '') +
          '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false' +
          filterUrlPart +
          '&with_watch_monetization_types=flatrate',
      )
      .pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
}
