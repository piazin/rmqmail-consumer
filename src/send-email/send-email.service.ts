import { Resend } from 'resend';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailPayloadDto } from 'src/consumer/dto/email-payload.dto';
import { CreateEmailOptions } from 'resend/build/src/emails/interfaces';

@Injectable()
export class SendEmailService {
  constructor(private configService: ConfigService) {}

  async send({ client, product }: EmailPayloadDto) {
    const resend = new Resend(this.configService.get<string>('RESEND_API_KEY'));

    const payload: CreateEmailOptions = {
      from: 'E-commerce <lucas@lucasouza.tech>',
      to: client.email,
      subject: 'Compra realizada com sucesso!',
      html: `
            <h1>Obrigado por comprar conosco!</h1>
            <p>Olá ${client.name},</p>
            <p>Seu produto ${product.name} no valor de ${product.price} foi comprado com sucesso!</p>
            <p>Atenciosamente</p>
      `,
    };

    await resend.emails.send(payload);
  }
}
