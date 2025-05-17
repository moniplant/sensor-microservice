import { Controller } from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import {
  GET_LATEST_SENSOR_DATA,
  GET_SENSOR_DATA_BATCH,
  SAVE_SENSOR_DATA,
} from 'src/events';
import { SensorDataDto } from './sensor-data.dto';

@Controller()
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  @EventPattern(SAVE_SENSOR_DATA)
  getNotifications(@Payload() data: SensorDataDto) {
    this.sensorDataService.create(data);
  }

  @MessagePattern(GET_LATEST_SENSOR_DATA)
  async getLatestSensorData(
    @Payload() data: { plantId: string; sensorId: string },
  ) {
    const response = await this.sensorDataService.findLatestSensorData(
      data.plantId,
      data.sensorId,
    );
    return JSON.stringify(response);
  }
  @MessagePattern(GET_SENSOR_DATA_BATCH)
  async getSensorDataBatch(
    @Payload()
    data: {
      plantId: string;
      sensorId: string;
      numberOfDataPoints: number;
    },
  ) {
    const response = await this.sensorDataService.findSensorDataBatch(
      data.plantId,
      data.sensorId,
      data.numberOfDataPoints,
    );
    return JSON.stringify(response);
  }
}
