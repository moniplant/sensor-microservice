import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SensorDataModule } from './sensor-data/sensor-data.module';

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
    SensorDataModule,
  ],
})
export class AppModule {}
