import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ScannerController } from './controllers';
import { ScannerService } from './services';
import { ScannerEntity } from './entities';
import { SshModule } from '../ssh';
import { ScannerRepository } from './repositories';


@Module({
    imports: [TypeOrmModule.forFeature([ScannerEntity]), SshModule],
    controllers: [ScannerController],
    providers: [ScannerService, ScannerRepository],
})
export class ScannerModule {
}