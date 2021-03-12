import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

console.log(process.env.DB_PASSWORD);

export const typeOrmConfig: TypeOrmModuleOptions = {
  //Example for postgres but available for others db
  type: dbConfig.type,
  host: process.env.DB_HOST || dbConfig.host,
  port: process.env.DB_PORT || dbConfig.port,
  username: process.env.DB_USERNAME || dbConfig.username,
  password: process.env.DB_PASSWORD || dbConfig.password,
  database: process.env.DB_DATABASE || dbConfig.database,
  autoLoadEntities: true,
  synchronize: dbConfig.synchronize,
};
