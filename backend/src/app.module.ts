import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from "@nestjs/serve-static";
import { ProductsModule } from './products/products.module';
import { clientDir, dbUrl } from "./properties";
import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [
  	ServeStaticModule.forRoot({rootPath: clientDir}),
  	ProductsModule,
  	MongooseModule.forRoot(dbUrl, {
  		useNewUrlParser: true,
  		useUnifiedTopology: true
  	})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

