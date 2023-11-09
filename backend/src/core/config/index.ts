import type { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { getDatabaseConfiguration } from './database';


type ConfigurationFactory = () => ({
    database: TypeOrmModuleOptions
})

export const configurationFactory: ConfigurationFactory = () => ({
    database: getDatabaseConfiguration(),
});


type ConfigurationDatabaseFactory = (configService: ConfigService) => TypeOrmModuleOptions

export const configurationDatabaseFactory: ConfigurationDatabaseFactory = (configService) => {
    return configService.get('database');
};