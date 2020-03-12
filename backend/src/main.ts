import {
	port,
	route,
	clientDir,
	dbUrl
} from "./properties";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  await app.listen(port);
  console.log(`Server running. URL: http://${route}`);
  console.log(`MongoDB connected. URL: ${dbUrl}`);
  console.log(`Serving static content: Directory: ${clientDir}`);
}
bootstrap();
