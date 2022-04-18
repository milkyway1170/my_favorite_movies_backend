import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsers1650017655962 implements MigrationInterface {
    name = 'CreateUsers1650017655962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorite_movies" ("userId" integer NOT NULL, "movieId" integer array NOT NULL, PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "favorite_genres" ("userId" integer NOT NULL, "genreId" integer array NOT NULL,   PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "users" ("userId" integer NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, PRIMARY KEY ("userId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "favorite_movies"`);
        await queryRunner.query(`DROP TABLE "favorite_genres"`);
    }

}
