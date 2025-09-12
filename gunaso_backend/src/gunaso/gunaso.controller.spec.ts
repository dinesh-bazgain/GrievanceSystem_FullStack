import { Test, TestingModule } from '@nestjs/testing';
import { GunasoController } from './gunaso.controller';

describe('GunasoController', () => {
  let controller: GunasoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GunasoController],
    }).compile();

    controller = module.get<GunasoController>(GunasoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
