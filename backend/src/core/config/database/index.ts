import { TypeOrmModuleOptions } from '@nestjs/typeorm';

type GetDatabaseConfiguration = () => TypeOrmModuleOptions

export const getDatabaseConfiguration: GetDatabaseConfiguration = () => ({
   type: 'postgres',
   host: process.env.DATABASE_HOST,
   port: Number(process.env.DATABASE_PORT),
   username: process.env.DATABASE_USERNAME,
   password: process.env.DATABASE_PASSWORD,
   database: process.env.DATABASE_NAME,
   synchronize: true,
   entities: [`${__dirname}/../../../**/*.entity.{ts,js}`],
});