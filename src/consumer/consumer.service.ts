import { Injectable } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';
import { EmailPayloadDto } from './dto/email-payload.dto';
import { SendEmailService } from '../send-email/send-email.service';

@Injectable()
export class ConsumerService {
  constructor(private sendEmailService: SendEmailService) {}

  async processPurchaseConfirmationEmail(
    data: EmailPayloadDto,
    context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();

    try {
      await this.sendEmailService.send(data);
      channel.ack(originalMessage);
    } catch (error) {
      console.error(error);
    }
  }
}
