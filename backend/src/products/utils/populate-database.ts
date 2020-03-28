/*
This script creates one collection "stock" and inserts into the database "ecommerce".
Each collection has 3 documents that are going to be sent to the client by negotiations.service.ts
Command for running this file: npx ts-node populatedb.ts
*/

import * as mongoose from "mongoose";
import { dbName } from "../../properties";
import { productSchema } from "../schemas/product.schema";

interface Product {
  category: string,
  subcategory: string,
  name: string,
  price: number,
  available: boolean,
  amount: number,
  release: Date,
  imgUrl: string
}

export default async function populateDb(collectionName: string) {
  const products: Product[] = [{
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