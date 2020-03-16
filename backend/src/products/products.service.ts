import {
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import Product from "./product.interface";
import ProductDto from "./product.dto";
import { routeApi } from "../properties";

@Injectable()
export class ProductsService {
  constructor(@InjectModel("stock") public readonly productModel: Model<Product>) {}

  public async getProducts(): Promise<Product[]> {
    const msg: string = `GET method for route ${routeApi}/products`;
    console.log(msg);
    return await this.productModel.find();
  }

  // First method, with all @Body fields
  public async postProduct(
    category,
    subcategory,
    name,
    price,
    available,
    amount,
    release
  ): Promise<Product> {
    const msg: string = `POST method for route ${routeApi}/products`;
    console.log(msg);
    const newProduct = new this.productModel({
      category,
      subcategory,
      name,
      price,
      available,
      amount,
      release
    });
    console.log("service");
    return await newProduct.save()
  }
}