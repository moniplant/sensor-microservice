import { Module } from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';
import { SensorDataController } from './sensor-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorData, SensorDataSchema } from './sensor-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        schema: SensorDataSchema,
        name: SensorData.name,
      },
    ]),
  ],
  controllers: [SensorDataController],
  providers: [SensorDataService],
})
export class SensorDataModule {}
