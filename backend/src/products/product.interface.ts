import * as mongoose from "mongoose";

export default interface Product extends mongoose.Document {
  category: string,
  subcategory: string,
  name: string,
  price: number,
  available: boolean,
  amount: number,
  release: Date
}