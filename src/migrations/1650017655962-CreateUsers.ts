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

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.newUserTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.newUserTable);
  }
}
