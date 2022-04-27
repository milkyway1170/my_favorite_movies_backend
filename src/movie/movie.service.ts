import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class MovieService {
  constructor(private httpService: HttpService) {}

  getMovieData(movieId: number): Observable<AxiosResponse<object>> {
    return this.httpService
      .get(
        (process.env.API_GET_MOVIE_DATA ?? '') +
          movieId.toString() +
          '?api_key=' +
          (process.env.API_KEY ?? '') +
          '&language=en-US',
      )
      .pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
}
