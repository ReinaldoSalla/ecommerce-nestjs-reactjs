import { join } from "path";

export const port: number = 3000;
export const hostname: string = "localhost";

export const dbName: string = "ecommerce";
export const dbUrl: string = `mongodb://${hostname}/${dbName}`;

export const clientDir: string = join(__dirname, "..", "..", "frontend", "build");

export const route: string = `${hostname}/${port}`;
export const routeApi: string = `${route}/api`;