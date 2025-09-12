import { NestFactory } from '@nestjs/core';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3005',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) => {
        console.log('Validation errors:', errors);
        return new BadRequestException(errors);
      },
    }),
  );

  await app.listen(process.env.PORT ? Number(process.env.PORT) : 5005);
  console.log('Server started on', process.env.PORT || 5005);
}
bootstrap();
