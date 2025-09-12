import { Test, TestingModule } from '@nestjs/testing';
import { GunasoService } from './gunaso.service';

describe('GunasoService', () => {
  let service: GunasoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GunasoService],
    }).compile();

    service = module.get<GunasoService>(GunasoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
