import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { ConsumerController } from './consumer.controller';
import { SendEmailService } from '../send-email/send-email.service';

@Module({
  imports: [],
  controllers: [ConsumerController],
  providers: [ConsumerService, SendEmailService],
})
export class ConsumerModule {}
