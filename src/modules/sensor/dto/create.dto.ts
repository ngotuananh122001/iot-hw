import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSensorDto {
  @ApiProperty({ required: true, example: 'Sensor name' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ required: true, example: 1 })
  @IsNumber()
  @IsNotEmpty()
  readonly value: number;

  @ApiProperty({ required: true, example: '2021-01-01 00:00:00' })
  @IsString()
  @IsNotEmpty()
  readonly receiveTime: string;
}
