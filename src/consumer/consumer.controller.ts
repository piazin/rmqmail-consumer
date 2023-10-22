import { Controller } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { EmailPayloadDto } from './dto/email-payload.dto';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern('purchase_confirmation_email_queue')
  receivingPurchaseConfirmationEmail(
    @Payload() data: EmailPayloadDto,
    @Ctx() context: RmqContext,
  ) {
    this.consumerService.processPurchaseConfirmationEmail(data, context);
  }
}
