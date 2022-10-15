import { Repository, EntityRepository } from 'typeorm';
import { Gatito } from './gatito.entity';
import { CreateGatitoDTO } from './create.gatito.dto';

@EntityRepository(Gatito)
export class GatitoRepository extends Repository<Gatito> {

  public async createGatito(
    CreateGatitoDto: CreateGatitoDTO,
  ): Promise<Gatito> {
    const {nombre, bigotes, pelaje, personalidad, edad, raza,} = CreateGatitoDto;

    const qatito = new Gatito();
    qatito.nombre = nombre;
    qatito.edad = edad; 
    qatito.bigotes = bigotes;
    qatito.pelaje = pelaje;
    qatito.personalidad = personalidad;
    qatito.raza = raza;


    await qatito.save();
    return qatito;
  }

  public async getAll(): Promise<Gatito[]>{
    let allgatos;
    await allgatos.find();
    return allgatos;
  }

  public async editGatito(
    CreateGatitoDto: CreateGatitoDTO,
    editedGatito : Gatito,
    ): Promise<Gatito> {
      const { nombre, bigotes, pelaje, personalidad, edad, raza} = CreateGatitoDto;
  

    editedGatito.nombre = nombre;
    editedGatito.pelaje = pelaje;
    editedGatito.edad = edad;
    editedGatito.bigotes = bigotes;
    editedGatito.personalidad = personalidad;
    editedGatito.raza = raza;

    await editedGatito.save();

    return editedGatito;
  }
}