import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { SENSORS_CONSUMER_GROUP_ID } from './tokens';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Microservice #1: managing data from sensors
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://localhost:1883',
    },
  });

  // Microservice #2: managing sensors (Creation, update etc...)
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
}
bootstrap();
