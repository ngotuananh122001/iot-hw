import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { CreateSensorDto } from './dto/create.dto';
import { ListSensorDto } from './dto/list.dto';
import { UpdateSensorDto } from './dto/update.dto';
import { SensorService } from './Sensor.service';

@Controller('api/sensors')
@ApiTags('sensors')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post('/')
  @ApiOperation({
    summary: 'Create sensor',
    description: 'Create sensor',
  })
  async create(@Body() data: CreateSensorDto, @Req() req) {
    return this.sensorService.create(req.user, data);
  }

  @Get('/')
  @ApiOperation({
    summary: 'List paginate sensor',
    description: 'Get all sensor',
  })
  async getSensors() {
    return this.sensorService.getSensors();
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Get sensor by id',
    description: 'Get sensor by id',
  })
  async getById(@Param('id') id: string) {
    return this.sensorService.getById(Number(id));
  }

  @Put('/:id')
  @ApiOperation({
    summary: 'Update sensor',
    description: 'Update sensor',
  })
  async update(@Param('id') id: string, @Body() data: UpdateSensorDto) {
    return this.sensorService.putSensor(id, data);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: 'Delete sensor by id',
    description: 'Delete sensory by id',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Sensor id',
  })
  async delete(@Param('id') id: string, @Req() req) {
    return this.sensorService.delete(Number(id));
  }
}
