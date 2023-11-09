import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

import { ScannerEntity } from '../entities';


@Injectable()
export class ScannerRepository {
    private readonly _scannerEntity: Repository<ScannerEntity>;

    constructor(@InjectRepository(ScannerEntity) scannerEntity: Repository<ScannerEntity>) {
        this._scannerEntity = scannerEntity;
    }

    public async create(data: ScannerEntity): Promise<ScannerEntity> {
        return await this._scannerEntity.save(data);
    }

    public async getAll(): Promise<ScannerEntity[]> {
        return await this._scannerEntity.find();
    }
}