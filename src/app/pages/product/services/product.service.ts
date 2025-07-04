import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../interface/product.dto';
import { ProductMapper } from '../mappers/product.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /** URL base da API */
  private readonly BASE_URL = 'https://fakestoreapi.com/products';

  /** Instância do HttpClient para requisições HTTP */
  private http = inject(HttpClient);

  /**
   * Busca todos os produtos da API e mapeia para a interface `Product`.
   *
   * @returns Um `Observable` que emite uma lista de produtos (`Product[]`).
   */
  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.BASE_URL)
      .pipe(map((apiProducts) => apiProducts.map(ProductMapper.fromApi)));
  }
}
