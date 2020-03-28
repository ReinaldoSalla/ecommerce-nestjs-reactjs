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
//import populateDb from "./utils/populate-database";

import * as mongoose from "mongoose";
import { productSchema } from "./schemas/product.schema";
import { dbName } from "../properties";


interface Productx {
  category: string,
  subcategory: string,
  name: string,
  price: number,
  available: boolean,
  amount: number,
  release: Date,
  imgUrl: string
}

@Injectable()
export class ProductsService {
  constructor(@InjectModel("stock") public readonly productModel: Model<Product>) {}

  private async populateDb(collectionName: string) {
    const products: Productx[] = [{
      category: "Electronics",
      subcategory: "Televisions",
      name: "Samsung 4K 80'",
      price: 99.99,
      available: true,
      amount: 100,
      release: new Date(2010, 1, 1),
      imgUrl: "../assets/car.jpg"
    }, {
      category: "Eletronics",
      subcategory: "Smartphones",
      name: "Galaxy S10+",
      price: 89.99,
      available: true,
      amount: 10,
      release: new Date(2010, 2, 1),
      imgUrl: "../assets/car.jpg"
    }, {
      category: "Clothes",
      subcategory: "T-Shirts",
      name: "T-Shirt Male Small",
      price: 39.99,
      available: true,
      amount: 5,
      release: new Date(2010, 3, 1),
      imgUrl: "../assets/car.jpg"
    }];
    const ProductModel = mongoose.model(collectionName, productSchema);
    for (let i =0; i < products.length; i++) {
      const product = new ProductModel({
        category: products[i].category,
        subcategory: products[i].subcategory,
        name: products[i].name,
        price: products[i].price,
        available: products[i].available,
        amount: products[i].amount,
        release: products[i].release,
        imgUrl: products[i].imgUrl
      });
      console.log("1");
      const x = await product.save();
      console.log("2");
      console.log(x);
      console.log(`Inserted one product into collection '${collectionName}'' into database '${dbName}'`);
    }
  }

  public async getProducts(): Promise<Product[]> {
    const msg: string = `GET method for route ${routeApi}/products`;
    console.log(msg);
    /*
    this.productModel.countDocuments({}, numDocuments => {
      if (!numDocuments) populateDb("stock");
    });
    */
    const collectionName: string = "stock";
    const products: Productx[] = [{
      category: "Electronics",
      subcategory: "Televisions",
      name: "Samsung 4K 80'",
      price: 99.99,
      available: true,
      amount: 100,
      release: new Date(2010, 1, 1),
      imgUrl: "../assets/car.jpg"
    }, {
      category: "Eletronics",
      subcategory: "Smartphones",
      name: "Galaxy S10+",
      price: 89.99,
      available: true,
      amount: 10,
      release: new Date(2010, 2, 1),
      imgUrl: "../assets/car.jpg"
    }, {
      category: "Clothes",
      subcategory: "T-Shirts",
      name: "T-Shirt Male Small",
      price: 39.99,
      available: true,
      amount: 5,
      release: new Date(2010, 3, 1),
      imgUrl: "../assets/car.jpg"
    }];
    const ProductModel = mongoose.model(collectionName, productSchema);
    for (let i =0; i < products.length; i++) {
      const product = new ProductModel({
        category: products[i].category,
        subcategory: products[i].subcategory,
        name: products[i].name,
        price: products[i].price,
        available: products[i].available,
        amount: products[i].amount,
        release: products[i].release,
        imgUrl: products[i].imgUrl
      });
      console.log("1");
      const x = await product.save();
      console.log("2");
      console.log(x);
      console.log(`Inserted one product into collection '${collectionName}'' into database '${dbName}'`);
    }

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