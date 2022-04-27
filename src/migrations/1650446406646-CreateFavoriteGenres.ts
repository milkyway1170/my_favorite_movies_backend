import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFavoriteGenres1650446406646 implements MigrationInterface {
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
        name: 'user_id',
        type: 'uuid',
        isNullable: false,
      },
      {
        name: 'genre_id',
        type: 'integer',
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.newFavoriteGenreTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.newFavoriteGenreTable);
  }
}
