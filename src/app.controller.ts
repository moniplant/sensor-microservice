import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  MessagePattern,
  Payload,
  Ctx,
  MqttContext,
} from '@nestjs/microservices';
import { SAVE_SENSOR_DATA } from './events';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(SAVE_SENSOR_DATA)
  getNotifications(@Payload() data: number[], @Ctx() context: MqttContext) {
    console.log(`Topic: ${context.getTopic()}`);
  }
}
