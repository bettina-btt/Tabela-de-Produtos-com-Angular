import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '../../dto/product.dto';

@Component({
  selector: 'app-custom-card',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() product!: Product;

  @Output() showDialog = new EventEmitter<Product>();

  onShowDialog() {
    if (this.product) return this.showDialog.emit(this.product);
  }
}
