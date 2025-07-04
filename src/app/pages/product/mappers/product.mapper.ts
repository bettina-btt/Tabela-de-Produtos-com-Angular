import { ProductApiResponse } from '../dto/productApiResponse.dto';
import { Product } from '../dto/product.dto';

export class ProductMapper {
  static fromApi(data: ProductApiResponse): Product {
    return { ...data };
  }

  static toApi(product: Product): ProductApiResponse {
    return { ...product };
  }
}
