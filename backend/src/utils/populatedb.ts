/*
This script creates 3 collections (thisWeek, lastWeek, beforeLastWeek) into the database "tarefa5".
Each collection has 3 documents that are going to be sent to the client by negotiations.service.ts
Command for running this file: npx ts-node populatedb.ts
*/

import * as mongoose from "mongoose";
import { dbUrl } from "../properties";
import { Product } from "../products/product.interface";
import { productSchema } from "../products/product.schema";

class DatabaseFiller {
	private date: Date;

	constructor() {
		//this.configureConnection();
		//this.date = new Date();
		//this.create
	}
}