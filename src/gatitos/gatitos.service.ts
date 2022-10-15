import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gatito } from './gatito.entity';
import { CreateGatitoDTO } from './create.gatito.dto';
import { GatitoRepository } from './gatito.repository';


@Injectable()
export class GatitoService {
  constructor(
    @InjectRepository(GatitoRepository)
    private GatitoRepository: GatitoRepository,
  ) {}

  public async createGatito(
    createGatitoDto: CreateGatitoDTO,
  ): Promise<Gatito> {
    return await this.GatitoRepository.createGatito(createGatitoDto);
  }


  public async getGatitos(): Promise<Gatito[]> {
    return await this.GatitoRepository.find();
  }


  public async getGatito(GatitoId: number): Promise<Gatito> {
    const foundGatito = await this.GatitoRepository.findOne({where: {gatoid: GatitoId}});
    if (!foundGatito) {
      throw new NotFoundException('Gatito not found');
    }
    return foundGatito;
  }


  public async editGatito(
    GatitoId: number,
    createGatitoDto: CreateGatitoDTO,
  ): Promise<Gatito> {
    const editedGatito = await this.GatitoRepository.findOne({where: {gatoid: GatitoId}});
    if (!editedGatito) {
      throw new NotFoundException('Gatito not found');
    }
    return this.GatitoRepository.editGatito(createGatitoDto, editedGatito);
  }


  public async deleteGatito(GatitoId: number): Promise<void> {
    await this.GatitoRepository.delete(GatitoId);
  }
}