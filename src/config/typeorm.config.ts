import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// temporal postgres connection
export const typeOrmConfig: TypeOrmModuleOptions = {
  //Example for postgres but available for others db
  type: 'postgres',
  host: 'db.tpyefpvoqisdsuhhjlpr.supabase.co',
  port: 5432,
  username: 'postgres',
  password: 'le-super-password-07',
  database: 'postgres',
  autoLoadEntities: true,
  synchronize: true,
};
