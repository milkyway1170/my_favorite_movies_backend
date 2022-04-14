import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true, envFilePath: './.env'}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'aurora-data-api'>('POSTGRES_CONNECTION'),
        username: config.get<string>('POSTGRES_USER'),
        password: config.get<string>('POSTGRES_PASSWORD'),
        database: config.get<string>('POSTGRES_DATABASE'),
        port: config.get<number>('POSTGRES_PORT'),
        entities: [__dirname + 'dist/**/*.entity{.ts, .js}'],
        synchronize: false,
        autoLoadEntities: true,
        logging: true
      })
    }),
    UsersModule
  ],
  providers: [],
})
export class AppModule {}
