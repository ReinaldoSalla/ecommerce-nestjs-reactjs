import {
  MinLength,
  MaxLength,
  Min,
  Max
} from "class-validator";

export class CreateProductDto {
  @MinLength(5) @MaxLength(50) category: string;
  @MinLength(5) @MaxLength(50) subcategory: string;
  @MinLength(5) @MaxLength(50) name: string;
  @Min(1) @Max(1000000) price: number;
  @Min(1) @Max(1000000) amount: number;
  available: boolean;
  release: Date;
}