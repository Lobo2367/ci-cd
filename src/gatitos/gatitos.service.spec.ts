import { Test, TestingModule } from '@nestjs/testing';
import { GatitosService } from './gatitos.service';

describe('GatitosService', () => {
  let service: GatitosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GatitosService],
    }).compile();

    service = module.get<GatitosService>(GatitosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
