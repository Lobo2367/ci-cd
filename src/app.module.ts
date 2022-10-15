import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GatitosModule } from './gatitos/gatitos.module';
import { GatitoService } from './gatitos/gatitos.service';
import { GatitoRepository } from './gatitos/gatito.repository';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
       username: "root",
       password: "password",
      database: 'test_db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
      autoLoadEntities: true
    }),
    GatitosModule,
  ],
  controllers: [AppController],
  providers: [AppService, GatitoService, GatitoRepository],
})
export class AppModule {}