import { IsNotEmpty, IsString, IsNumber, Min, MaxLength, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString()
  @MaxLength(200)
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0, { message: 'El precio no puede ser negativo' })
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0, { message: 'El stock no puede ser negativo' })
  stock: number;
}