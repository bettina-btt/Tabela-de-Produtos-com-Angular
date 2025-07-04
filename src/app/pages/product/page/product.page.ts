import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { Product } from '../dto/product.dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './product.page.html',
  styleUrl: './product.page.css',
})
export class ProductPageComponent implements OnInit {
  private productService: ProductService = inject(ProductService);

  searchInput = '';

  products: Product[] = [];
  allProducts: Product[] = [];
  selectedProduct?: Product;

  searchProduct(): void {
    const search = this.searchInput.trim().toLowerCase();

    if (!search) {
      this.products = this.allProducts;
      return;
    }

    this.products = this.allProducts.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
  }

  onShowDialog(product: Product) {
    this.selectedProduct = product;
    return;
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.allProducts = data;
      this.products = data;
    });
  }
}
