import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from "@nestjs/mongoose";
import { productSchema } from "./product.schema"

@Module({
  imports: [MongooseModule.forFeature([{ name: "stock", schema: productSchema }])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
