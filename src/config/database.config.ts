import { ConnectionOptions } from 'typeorm';
import {
  Sensor,
} from '../database/entities';
export const databaseConfig: ConnectionOptions = {
  type: (process.env.TYPEORM_CONNECTION || 'mysql') as any,
  host: process.env.TYPEORM_HOST || 'localhost',
  port: parseInt(process.env.TYPEORM_PORT) || 3306,
  username: process.env.TYPEORM_USERNAME || 'root',
  password: process.env.TYPEORM_PASSWORD || 'xxx',
  database: process.env.TYPEORM_DATABASE || 'xxx',
  entities: [
    Sensor,
  ],
  synchronize: true,
};
