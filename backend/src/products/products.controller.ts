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

@Controller("/products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return await this.productsService.getProducts();
  }

  // First method, with all @Body fileds
  @Post()
  async postProduct(
    @Body() productDto: ProductDto,
    @Body("category") category: string,
    @Body("subcategory") subcategory: string,
    @Body("name") name: string,
    @Body("price") price: number,
    @Body("available") available: boolean,
    @Body("amount") amount: number,
    @Body("release") release: Date
  ): Promise<Product> {
    return await this.productsService.postProduct(
      category,
      subcategory,
      name,
      price,
      available,
      amount,
      release
    );
  }
}

