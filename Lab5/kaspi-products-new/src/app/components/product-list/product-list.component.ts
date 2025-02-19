import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() like = new EventEmitter<Product>();
  @Output() remove = new EventEmitter<Product>();

  onLike(product: Product) {
    this.like.emit(product);
  }

  onRemove(product: Product) {
    this.remove.emit(product);
  }
}