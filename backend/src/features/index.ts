import { Module } from '@nestjs/common';
import { ScannerModule } from './scanner';


@Module({
    imports: [ScannerModule],
    exports: [ScannerModule],
})
export class FeaturesModule {
}