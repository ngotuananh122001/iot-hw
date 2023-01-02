import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ListSensorDto {
  @ApiProperty({ required: true, example: 1 })
  @IsNotEmpty()
  @IsNumber()
  readonly page: number;

  @ApiProperty({ required: true, example: 10 })
  @IsNotEmpty()
  @IsNumber()
  readonly limit: number;

  @ApiProperty({ required: false, example: 'name' })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({ required: false, example: 0, description: 'ON: 1, OFF: 0' })
  @IsOptional()
  @IsNumber()
  @IsIn([0, 1])
  readonly status: number;

  @ApiProperty({ required: false, example: '192.168.1.1' })
  @IsOptional()
  @IsString()
  readonly ipAddr: string;

  @ApiProperty({ required: false, example: 'location' })
  @IsOptional()
  @IsString()
  readonly location: string;

  @ApiProperty({ required: false, example: 1 })
  @IsOptional()
  @IsNumber()
  readonly sensorCategoryId: number;
  
  @ApiProperty({ required: false, example: 1 })
  @IsOptional()
  @IsNumber()
  readonly greenHouseId: number;

  // TODO: add more fields
  // TODO: add sorts
}