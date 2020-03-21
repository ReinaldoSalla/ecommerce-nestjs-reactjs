import {
  MinLength,
  MaxLength,
  Min,
  Max
} from "class-validator";

export class CreateProductDto {
  @MinLength(5) @MaxLength(10) category: string;
  @MinLength(5) @MaxLength(10) subcategory: string;
  @MinLength(5) @MaxLength(10) name: string;
  @Min(1) @Max(100) price: number;
  available: boolean;
  amount: number;
  release: Date;
}