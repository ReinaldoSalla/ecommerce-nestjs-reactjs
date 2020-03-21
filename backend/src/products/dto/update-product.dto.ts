import {
	MaxLength,
	Min,
	Max
} from "class-validator";


export class UpdateProductDto {
  @MaxLength(50) category: string;
  @MaxLength(50) subcategory: string;
  @MaxLength(50) name: string;
  @Min(0) @Max(1000000) price: number;
  @Min(0) @Max(1000000) amount: number;
  available: boolean;
  release: Date;
}