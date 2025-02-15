import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { SENSORS_CONSUMER_GROUP_ID } from './tokens';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://mqtt:1883',
    },
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:29092'],
      },
      consumer: {
        groupId: SENSORS_CONSUMER_GROUP_ID,
      },
    },
  });

  await app.startAllMicroservices();

  app.listen(3001);
}
bootstrap();
