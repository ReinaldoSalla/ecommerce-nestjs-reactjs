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