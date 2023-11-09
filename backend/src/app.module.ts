import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { configurationDatabaseFactory, configurationFactory } from './core';
import { FeaturesModule } from './features';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `${join(__dirname, '..', './.env/.env')}`,
            isGlobal: true,
            load: [configurationFactory],
        }),
        TypeOrmModule.forRootAsync({
            useFactory: configurationDatabaseFactory,
            inject: [ConfigService],
        }),
        FeaturesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}