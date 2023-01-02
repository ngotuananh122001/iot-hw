import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, Index } from 'typeorm';

@Entity('sensor')
export class Sensor {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: 191, unique: true })
  public name: string;

  @Column({name: 'value', type: 'float', nullable: true})
  public value: number;

  @Column({name: 'receiveTime', type: 'varchar', nullable: true})
  public receiveTime: string;
}
