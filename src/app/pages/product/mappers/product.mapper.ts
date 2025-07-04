import { ProductApiResponse } from '../interface/productApiResponse.dto';
import { Product } from '../interface/product.dto';

/**
 * Classe responsável por mapear dados entre a interface `Product`
 * e a interface `ProductApiResponse`.
 */
export class ProductMapper {
  /**
   * Converte um objeto recebido da API no formato (`ProductApiResponse`)
   * para o modelo interno da aplicação (`Product`).
   *
   * @param data - Os dados do produto recebidos da API.
   * @returns Um objeto `Product` mapeado.
   */
  static fromApi(data: ProductApiResponse): Product {
    return { ...data };
  }
}
