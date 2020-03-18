
export class CreateProductDto {
  category: string;
  subcategory: string;
  name: string;
  price: number;
  available: boolean;
  amount: number;
  release: Date;
}