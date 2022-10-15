import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gatito } from './gatito.entity';
import { CreateGatitoDTO } from './create.gatito.dto';
import { GatitoRepository } from './gatito.repository';


@Injectable()
export class GatitoService {
  constructor(
    @InjectRepository(GatitoRepository)
    private GqatitoRepository: GatitoRepository,
  ) {}

  public async createGatito(
    createGatitoDto: CreateGatitoDTO,
  ): Promise<Gatito> {
    return await this.GqatitoRepository.createGatito(createGatitoDto);
  }


  public async getGatitos(): Promise<Gatito[]> {
    let arr;
    arr = await this.GqatitoRepository.find();
    console.log(arr)
    return arr;
  }


  public async getGatito(GatitoId: string): Promise<Gatito> {
    const foundGatito = await this.GqatitoRepository.findOne({where: {nombre: GatitoId}});
    if (!foundGatito) {
      throw new NotFoundException('Gatito not found');
    }
    return foundGatito;
  }


  public async editGatito(
    GatitoId: string,
    createGatitoDto: CreateGatitoDTO,
  ): Promise<Gatito> {
    const editedGatito = await this.GqatitoRepository.findOne({where: {nombre: GatitoId}});
    if (!editedGatito) {
      throw new NotFoundException('Gatito not found');
    }
    return this.GqatitoRepository.editGatito(createGatitoDto, editedGatito);
  }


  public async deleteGatito(GatitoId: string): Promise<void> {
    await this.GqatitoRepository.delete(GatitoId);
  }
}