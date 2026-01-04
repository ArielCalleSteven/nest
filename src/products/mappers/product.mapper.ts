import { Product } from '../models/product.model';
import { CreateProductDto } from '../dtos/create-product.dto';

export class ProductMapper {
  static toEntity(id: number, dto: any): Product {
    return new Product(
      id,
      dto.name,
      dto.description,
      dto.price,
      dto.stock
    );
  }

  static toResponse(entity: Product) {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      price: entity.price,
      stock: entity.stock,
    };
  }
}