import { Controller, Logger } from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';
import {
  MessagePattern,
  Payload,
  Ctx,
  MqttContext,
} from '@nestjs/microservices';
import { SAVE_SENSOR_DATA } from 'src/events';
import { SensorDataDto } from './sensor-data.dto';

@Controller()
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  @MessagePattern(SAVE_SENSOR_DATA)
  getNotifications(
    @Payload() data: SensorDataDto,
    @Ctx() context: MqttContext,
  ) {
    this.sensorDataService.create(data);
    Logger.log(`Topic: ${context.getTopic()}, data: ${JSON.stringify(data)}}`);
  }
}
