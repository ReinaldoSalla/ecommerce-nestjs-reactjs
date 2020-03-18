import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  UseFilters,
  HttpCode
} from "@nestjs/common";
import { Product } from "./interfaces/product.interface";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { Validator } from "class-validator";
import { FindOneParams } from "./dto/find-one-params.dto";

@Controller("/products")
export class ProductsController {
  private validator;

  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return await this.productsService.getProducts();
  }

  @Post()
  async postProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.postProduct(createProductDto);
  }

  @Delete(":id")
  @HttpCode(204)
  async deleteProduct(@Param() params: FindOneParams): Promise<null> {
    await this.productsService.deleteProduct(params)
    return null
  } 
}