import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

import { type HostNameCtlDto, HostNameCtlFactory } from '../__types__';
import { SshService } from '../../ssh/services';
import { ScannerRepository } from '../repositories';


@Injectable()
export class ScannerService {
    private readonly _sshService: SshService;
    private readonly _scannerRepository: ScannerRepository;

    constructor(sshService: SshService, scannerRepository: ScannerRepository) {
        this._sshService = sshService;
        this._scannerRepository = scannerRepository;
    }

    async hostNameCtl({ ip, port, login, password }: HostNameCtlDto) {
        try {
            const connection = await this._sshService.connect({ ip, port, login, password });
            const text = await connection.getHostInformation();
            const connection2 = await this._sshService.connect({ ip, port, login, password });
            const versionText = await connection2.getHostInformation('lsb_release -a');

            const correctData = HostNameCtlFactory.create({ text, versionText });
            const _password = await this._hash(password);
            const scannerEntity = await this._scannerRepository.create({
                ...correctData,
                port,
                ip,
                login,
                password: _password,
                commands: 'hostnamectl; lsb_release -a',
            });

            return {
                code: HttpStatus.OK,
                message: 'Success',
                result: scannerEntity,
            };

        } catch (message) {
            throw new HttpException(message, HttpStatus.BAD_REQUEST);
        }
    }

    async getAll() {

        return {
            code: HttpStatus.OK,
            message: 'Success',
            result: await this._scannerRepository.getAll(),
        };
    }

    private async _hash(password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, function(err, hash) {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    }
}