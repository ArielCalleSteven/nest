import { ProductEntity } from '../entities/product.entity';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { PartialUpdateProductDto } from '../dtos/partial-update-product.dto';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public stock: number,
  ) {
    if (!name || name.trim().length < 3) {
      throw new Error('El nombre del producto es inválido');
    }
    if (price < 0) {
      throw new Error('El precio no puede ser negativo');
    }
    if (stock < 0) {
      throw new Error('El stock no puede ser negativo');
    }
  }

  
  static fromDto(dto: CreateProductDto): Product {
    return new Product(0, dto.name, dto.description || '', dto.price, dto.stock);
  }

  static fromEntity(entity: ProductEntity): Product {
    return new Product(
      entity.id,
      entity.name,
      entity.description,
      parseFloat(entity.price as any),
      entity.stock
    );
  }

  toEntity(): ProductEntity {
    const entity = new ProductEntity();
    if (this.id > 0) entity.id = this.id;
    entity.name = this.name;
    entity.description = this.description;
    entity.price = this.price;
    entity.stock = this.stock;
    return entity;
  }

  toResponseDto() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      stock: this.stock,
    };
  }

  update(dto: UpdateProductDto) {
    this.name = dto.name;
    this.description = dto.description || this.description;
    this.price = dto.price;
    this.stock = dto.stock;
    return this;
  }

  partialUpdate(dto: PartialUpdateProductDto) {
    if (dto.name !== undefined) this.name = dto.name;
    if (dto.description !== undefined) this.description = dto.description;
    if (dto.price !== undefined) this.price = dto.price;
    if (dto.stock !== undefined) this.stock = dto.stock;
    return this;
  }
}