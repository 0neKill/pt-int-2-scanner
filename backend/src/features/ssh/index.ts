import { Module } from '@nestjs/common';
import { SshService } from './services';


@Module({
    providers: [SshService],
    exports: [SshService],
})
export class SshModule {
}