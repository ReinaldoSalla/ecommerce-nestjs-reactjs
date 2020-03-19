import {
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./interfaces/product.interface";
import {CreateProductDto} from "./dto/create-product.dto";
import { routeApi } from "../properties";
import { FindOneParams } from "./dto/find-one-params.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsService {
  constructor(@InjectModel("stock") public readonly productModel: Model<Product>) {}

  public async getProducts(): Promise<Product[]> {
    const msg: string = `GET method for route ${routeApi}/products`;
    console.log(msg);
    return await this.productModel.find();
  }

  public async postProduct(createProductDto: CreateProductDto): Promise<Product> {
    const msg: string = `POST method for route ${routeApi}/products`;
    console.log(msg);
    const newProduct = new this.productModel(createProductDto);
    return await newProduct.save();
  }

  // From academind
  public async patchProduct(params: FindOneParams, updateProductDto: UpdateProductDto): Promise<void> {
    const product = await this.productModel.findById({_id: params.id});
    if (product) {
      if (updateProductDto.category) product.category = updateProductDto.category;
      if (updateProductDto.subcategory) product.subcategory = updateProductDto.subcategory;
      if (updateProductDto.name) product.name = updateProductDto.name;
      if (updateProductDto.price) product.price = updateProductDto.price;
      if (updateProductDto.available) product.available = updateProductDto.available;
      if (updateProductDto.amount) product.amount = updateProductDto.amount;
      if (updateProductDto.release) product.release = updateProductDto.release;
      const msg: string = `PATCH method for route ${routeApi}/products/${params.id}`;
      console.log(msg);
      product.save();
    } else {
      const msg: string = `PATCH method for nonexistent id: ${params.id}`;
      console.log(msg);
      throw new NotFoundException(`Product with id '${params.id} does not exist in the database`);
    }
  }

  public async deleteProduct(params: FindOneParams): Promise<void> {
    const product = await this.productModel.deleteOne({_id: params.id});
    if (product.n !== 0) {
      const msg: string = `DELETE method for route ${routeApi}/products/${params.id}`;
      console.log(msg);
    } else {
      const msg: string = `DELETE method for nonexistent id: ${params.id}`;
      console.log(msg);
      throw new NotFoundException(`Negotiation with id '${params.id}' doest not exist in the database`);
    }
  }
}