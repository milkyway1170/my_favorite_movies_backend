import { Injectable } from '@nestjs/common';

@Injectable()
export class PosterService {
  constructor() {}

  getPoster(posterPath: string) {
    return (process.env.API_GET_POSTER ?? '') + posterPath;
  }
}
