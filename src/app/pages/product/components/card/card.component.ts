import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '../../interface/product.dto';

/**
 * Componente de cartão que exibe informações do produto
 * e emite um evento quando o usuário solicita visualizar mais detalhes.
 */
@Component({
  selector: 'app-custom-card',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './card.component.html',
})
export class CardComponent {
  /**
   * Produto a ser exibido no card.
   * É obrigatório e deve seguir a estrutura do DTO `Product`.
   */
  @Input() product!: Product;

  /**
   * Evento emitido quando o usuário solicita exibir detalhes do produto.
   * Emite o objeto `Product` correspondente.
   */
  @Output() showDialog = new EventEmitter<Product>();

  /**
   * Método chamado quando o usuário clica para visualizar detalhes do produto.
   * Verifica se o produto está definido antes de emitir o evento `this.showDialog`.
   */
  onShowDialog(): void {
    if (this.product) return this.showDialog.emit(this.product);
  }
}
