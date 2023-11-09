import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

(async () => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const PORT = process.env.SERVER_PORT ?? 3000;
    app.enableCors();
    app.setGlobalPrefix('/api/');
    await app.listen(PORT, () => console.log(`Server is running... ${PORT}`));
})();
