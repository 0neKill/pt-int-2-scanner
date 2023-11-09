import { HttpException, HttpStatus, Injectable, type PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { HostNameCtlDto } from '../__types__';

@Injectable()
export class HostNameCtlPipe implements PipeTransform<HostNameCtlDto, Promise<HostNameCtlDto>> {

    async transform(value: HostNameCtlDto): Promise<HostNameCtlDto> {
        const object: HostNameCtlDto = plainToClass(HostNameCtlDto, value);
        let errors = await validate(object);

        if (errors.length) {
            const message = errors.map(item => (
                `${item.property}: ${Object.values(item.constraints ?? item.children[0].constraints).join(', ')}`
            ));
            throw new HttpException(message, HttpStatus.BAD_REQUEST);
        }
        return value;
    }
}