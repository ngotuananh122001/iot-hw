import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';

import { CreateSensorDto } from './dto/create.dto';
import { Causes } from 'src/config/exception/causes';
import { ListSensorDto } from './dto/list.dto';
import { getArrayPaginationBuildTotal, getOffset } from 'src/shared/Utils';
import { UpdateSensorDto } from './dto/update.dto';
import { Sensor } from 'src/database/entities';

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(Sensor)
    private readonly sensorRepo: Repository<Sensor>
  ) {}

  async create(user: any, data: CreateSensorDto) {
    const duplicate = await getConnection().getRepository(Sensor).findOne({ name: data.name });
    if (duplicate) {
      throw Causes.SENSOR_ALREADY_EXISTED;
    }

    

    const sensor = new Sensor();
    data.name && (sensor.name = data.name);
    data.value && (sensor.value = data.value); 
    data.receiveTime && (sensor.receiveTime = data.receiveTime);

    // TODO: Check user is admin
    return this.sensorRepo.save(sensor);
  }

  async getSensors() {
    return this.sensorRepo.find(); 
  }

  async getById(id: number) {
    const sensor = await this.sensorRepo.findOne({ id });
    if (!sensor) {
      throw Causes.SENSOR_NOT_FOUND;
    }

    return sensor;
  }

  async putSensor(id, data) {
    const sensor = await this.sensorRepo.findOne({ id});
    if (!sensor) {
      throw Causes.SENSOR_NOT_FOUND;
    }

    data.name && (sensor.name = data.name);
    data.value && (sensor.value = data.value);
    data.receiveTime && (sensor.receiveTime = data.receiveTime);

    await this.sensorRepo.save(sensor);
    return true;
  }

  async delete(id: number) {
    const sensor = await this.sensorRepo.findOne({ id });
    if (!sensor) {
      throw Causes.SENSOR_NOT_FOUND;
    }

    await this.sensorRepo.delete({ id });
    return true;
  }
}
