import { IsNumber, IsString } from 'class-validator';

export class CreateGatitoDTO {  
    @IsString()
    nombre: string;
  
    @IsString()
    raza: string;
  
    @IsNumber()
    edad: number;

    @IsNumber()
    gatoid: number;
  
    @IsString()
    pelaje: string;
  
    @IsString()
    bigotes: string;
  
    @IsString()
    personalidad: string;
}

function IsUnique() {
    throw new Error('Function not implemented.');
}
