import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class GenresService {
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
      );
  }
}
