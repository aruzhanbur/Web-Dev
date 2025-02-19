import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<Product>();
  @Output() remove = new EventEmitter<Product>();

  onLike() {
    this.product.likes++; 
  }
  

  onRemove() {
    this.remove.emit(this.product);
  }

  shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product.name + " - " + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}

