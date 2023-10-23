import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const configApp = await NestFactory.create(AppModule);
  let configService = configApp.get(ConfigService);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [configService.get<string>('RABBITMQ_URL')],
        noAck: false,
        queue: 'purchase_confirmation_email_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  configApp.close();
  await app.listen();
}
bootstrap();
