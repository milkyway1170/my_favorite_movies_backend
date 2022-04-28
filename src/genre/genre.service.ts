import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class GenreService {
  constructor(private httpService: HttpService) {}

  getGenres(): Observable<AxiosResponse<object>> {
    return this.httpService
      .get(
        (process.env.API_GET_GENRES ?? '') +
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
