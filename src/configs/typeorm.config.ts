import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'md2',
  entities: [__dirname + '/../**/entities/*.entity.{js.ts}'],
  synchronize: true,
};
