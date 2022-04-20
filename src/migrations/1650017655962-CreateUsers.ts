import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1650017655962 implements MigrationInterface {
  name = 'CreateUsers1650017655962';

  private newUserTable = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        default: 'uuid_generate_v4()',
      },
      {
        name: 'login',
        type: 'character varying',
        isNullable: false,
      },
      {
        name: 'password',
        type: 'character varying',
        isNullable: false,
      },
    ],
  });

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
        name: 'movie_id',
        type: 'number',
        isNullable: false,
      },
    ],
  });

  private newFavoriteGenreTable = new Table({
    name: 'favorite_genres',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        default: 'uuid_generate_v4()',
      },
      {
        name: 'genre_id',
        type: 'number',
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.newUserTable);
    await queryRunner.createTable(this.newFavoriteMovieTable);
    await queryRunner.createTable(this.newFavoriteGenreTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.newUserTable);
    await queryRunner.dropTable(this.newFavoriteMovieTable);
    await queryRunner.dropTable(this.newFavoriteGenreTable);
  }
}
