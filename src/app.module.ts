import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConsumerModule } from './consumer/consumer.module';
import { SendEmailService } from './send-email/send-email.service';

@Module({
  imports: [
    ConsumerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [SendEmailService],
})
export class AppModule {}
