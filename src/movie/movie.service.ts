import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
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
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
      );
  }
}
