import { Module } from '@nestjs/common';
import { GatitoService } from './gatitos.service';
import { GatitoController } from './gatitos.controller';
import { GatitoRepository } from './gatito.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [GatitoRepository, TypeOrmModule.forFeature([GatitoRepository])],
  providers: [GatitoService, GatitoRepository],
  controllers: [GatitoController]
})
export class GatitosModule {}
