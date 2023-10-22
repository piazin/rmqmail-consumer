import { Test, TestingModule } from '@nestjs/testing';
import { SendEmailService } from './send-email.service';
import { ConfigService } from '@nestjs/config';

describe('SendEmailService', () => {
  let sendEmailService: SendEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendEmailService, ConfigService],
    }).compile();

    sendEmailService = module.get<SendEmailService>(SendEmailService);
    sendEmailService.send = jest.fn();
  });

  it('should be defined', () => {
    expect(sendEmailService).toBeDefined();
    expect(sendEmailService).toBeInstanceOf(SendEmailService);
  });

  it('should send an email', async () => {
    const client = {
      name: 'Lucas',
      email: 'ls4803326@gmail.com',
    };
    const product = {
      name: 'Curso NestJS',
      price: 100,
    };
    const payload = { client, product };
    const result = await sendEmailService.send(payload);
    expect(result).toBeUndefined();
  });
});
