 import * as mongoose from "mongoose";

 export const productSchema = new mongoose.Schema({
   category: { type: String, required: true},
   subcategory: { type: String, required: true},
   name: { type: String, required: true},
   price: { type: Number, required: true},
   available: { type: Boolean, required: true },
   amount: { type: Number, required: true },
   release: { type: Date, required: true },
 });

