import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { Product } from '../interface/product.dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';

/**
 * Componente responsável pela página de listagem de produtos,
 * incluindo funcionalidades de busca e exibição detalhada.
 */
@Component({
  selector: 'app-product-page',
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './product.page.html',
  styleUrl: './product.page.css',
})
export class ProductPageComponent implements OnInit {
  /**
   * Service que faz a busca dos Produtos da página
   */
  private productService: ProductService = inject(ProductService);

  /** Texto do input de busca para filtrar os produtos */
  searchInput = '';

  /** Lista atual de produtos exibidos, pode ser filtrada */
  products: Product[] = [];

  /** Lista completa de produtos carregados da API */
  allProducts: Product[] = [];

  /** Produto selecionado para exibir detalhes */
  selectedProduct?: Product;

  /**
   * Filtra os produtos com base no texto de busca,
   * atualizando a lista `products` para exibir resultados.
   */
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

  /**
   * Manipulador acionado para exibir detalhes de um produto selecionado.
   *
   * @param product - Produto selecionado para exibição detalhada.
   */
  onShowDialog(product: Product): void {
    this.selectedProduct = product;
  }

  /**
   * Lifecycle hook que carrega a lista completa de produtos na inicialização
   * do componente, preenchendo `allProducts` e `products`.
   */
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.allProducts = data;
      this.products = data;
    });
  }
}
