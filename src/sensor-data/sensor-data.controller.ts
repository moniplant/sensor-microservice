import { Controller } from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { GET_LATEST_SENSOR_DATA, SAVE_SENSOR_DATA } from 'src/events';
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
}
