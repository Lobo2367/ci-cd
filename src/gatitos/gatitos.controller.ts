import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
import { Gatito } from './gatito.entity';
import { GatitoService } from './gatitos.service';
import { CreateGatitoDTO } from './create.gatito.dto';
  
  @Controller('gatito')
  export class GatitoController {
    constructor(private gatitoService: GatitoService) {}
  
    @Post('create')
    public async createGatito(
      @Body() createGatitoDto: CreateGatitoDTO,
    ): Promise<Gatito> {
      const gato = await this.gatitoService.createGatito(createGatitoDto);
      return gato;
    }
  
    @Get('all')
    public async getProducts(): Promise<Gatito[]> {
      const products = await this.gatitoService.getGatitos();
      return products;
    }
  
    @Get('/:GatitoID')
    public async getGatito(@Param('GatitoID') GatitoID: string) {
      const gato = await this.gatitoService.getGatito(GatitoID);
      return gato;
    }
  
    @Patch('/edit/:GatitoID')
    public async editGatito(
      @Body() createGatitoDto: CreateGatitoDTO,
      @Param('GatitoID') GatitoID: string,
    ): Promise<Gatito> {
      const gatito = await this.gatitoService.editGatito(
        GatitoID,
        createGatitoDto,
      );
      return gatito;
    }
  
    @Delete('/delete/:gatitoID')
    public async deletegatito(@Param('GatitoID') gatitoId: string) {
      const deletedgatito = await this.gatitoService.deleteGatito(gatitoId);
      return deletedgatito;
    }
  }