import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';

describe('ConsumerController', () => {
  let controller: ConsumerController;
  let consumerService: ConsumerService;
  let testingModule: TestingModule;

  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      controllers: [ConsumerController],
      providers: [ConsumerService],
    })
      .overrideProvider(ConsumerService)
      .useValue({
        processPurchaseConfirmationEmail: jest.fn(),
      })
      .compile();

    controller = testingModule.get<ConsumerController>(ConsumerController);
    consumerService = testingModule.get<ConsumerService>(ConsumerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(consumerService).toBeDefined();
  });
});
