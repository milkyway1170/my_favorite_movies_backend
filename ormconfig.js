module.exports = {
  type: 'postgres',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  // host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrations: ['dist/src/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations'
  }
}