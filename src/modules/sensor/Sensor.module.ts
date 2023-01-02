import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sensor } from 'src/database/entities';
import { SensorController } from './Sensor.controller';
import { SensorService } from './Sensor.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sensor]),
  ],
  controllers: [SensorController],
  providers: [SensorService],
  exports: [],
})
export class SensorModule {}
