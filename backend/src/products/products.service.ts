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

  public async postProduct(productDto: ProductDto): Promise<Product> {
    const msg: string = `POST method for route ${routeApi}/products`;
    console.log(msg);
    const newProduct = new this.productModel(productDto);
    return newProduct.save();
  }

  public async deleteProduct(id: string): Promise<void> {
    const product = await this.productModel.deleteOne({_id: id});
    if (product.n !== 0) {
      const msg: string = `DELETE method for route ${routeApi}/products/${id}`;
      console.log(msg);
    } else {
      const msg: string = `DELETE method for nonexistent id: ${id}`;
      console.log(msg);
      throw new NotFoundException(`Negotiation with id '${id}' doest not exist in the database`);
    }
  }
}