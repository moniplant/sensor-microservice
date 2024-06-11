import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        dbName: configService.get<string>('DB_NAME'),
        uri: `mongodb://${configService.get<string>(
          'DB_ROOT_USERNAME',
        )}:${configService.get<string>(
          'DB_ROOT_PASSWORD',
        )}@mongo:${configService.get<number>('DB_PORT')}`,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
