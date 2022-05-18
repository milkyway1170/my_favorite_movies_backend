import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFavoriteMovies1650446340367 implements MigrationInterface {
  private newFavoriteMovieTable = new Table({
    name: 'favorite_movies',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        default: 'uuid_generate_v4()',
      },
      {
        name: 'user_id',
        type: 'uuid',
        isNullable: false,
      },
      {
        name: 'movie_id',
        type: 'integer',
        isNullable: false,
      },
      {
        name: 'is_watched',
        type: 'boolean',
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.newFavoriteMovieTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.newFavoriteMovieTable);
  }
}
