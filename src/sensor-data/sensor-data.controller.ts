import { Controller } from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SAVE_SENSOR_DATA } from 'src/events';
import { SensorDataDto } from './sensor-data.dto';

@Controller()
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  @MessagePattern(SAVE_SENSOR_DATA)
  getNotifications(@Payload() data: SensorDataDto) {
    this.sensorDataService.create(data);
  }
}
