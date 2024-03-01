import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { ErrorExceptionFilter } from './commons/filters/error-exception.filter';
import { ResponseInterceptor } from './commons/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.use(helmet());
  app.setGlobalPrefix('/api');
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new ErrorExceptionFilter());
  await app.listen(process.env.BASE_PORT || 3939);
}
bootstrap();
