import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../dto/product.dto';
import { ProductApiResponse } from '../dto/productApiResponse.dto';
import { ProductMapper } from '../mappers/product.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly BASE_URL = 'https://fakestoreapi.com/products';

  private http = inject(HttpClient);

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.BASE_URL)
      .pipe(map((apiProducts) => apiProducts.map(ProductMapper.fromApi)));
  }

  getProductById(id: number): Observable<unknown> {
    return this.http
      .get<ProductApiResponse>(`${this.BASE_URL}/${id}`)
      .pipe(map(ProductMapper.fromApi));
  }
}
