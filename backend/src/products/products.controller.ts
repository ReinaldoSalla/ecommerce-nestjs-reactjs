import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  UseFilters,
  BadRequestException
} from "@nestjs/common";
import Product from "./product.interface";
import { ProductsService } from "./products.service";
import ProductDto from "./product.dto";
import { Validator } from "class-validator";

@Controller("/products")
export class ProductsController {
  private validator;

  constructor(private readonly productsService: ProductsService) {
    this.validator = new Validator()
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return await this.productsService.getProducts();
  }

  @Post()
  async postProduct(@Body() productDto: ProductDto) {
    return this.productsService.postProduct(productDto);
  }

  @Delete(":id")
  async deleteProduct(@Param("id") id: string): Promise<null> {
    return null
  } 
}