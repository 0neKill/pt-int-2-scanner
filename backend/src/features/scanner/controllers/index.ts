import { Body, Controller, Get, Post } from '@nestjs/common';

import { ScannerService } from '../services';
import { HostNameCtlPipe } from '../pipes';

import type { HostNameCtlDto } from '../__types__';

@Controller('scanner')
export class ScannerController {
    private readonly _scannerService: ScannerService;

    constructor(scannerService: ScannerService) {
        this._scannerService = scannerService;
    }

    @Post('/hostnameCtl')
    hostNameCtl(@Body(HostNameCtlPipe) body: HostNameCtlDto) {
        return this._scannerService.hostNameCtl(body);
    }

    @Get('/getAll')
    getAll() {
        return this._scannerService.getAll();
    }
}