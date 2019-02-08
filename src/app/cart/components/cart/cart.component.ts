// cart.component.ts
import { CartItem } from './../../models/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];

  constructor(private cartService: CartService) {
      this.cartItems = cartService.cartItems;
   }

  ngOnInit() {
  }

  addItem() {
    const id = Math.ceil(Math.random() * 10000);
    const price = Math.ceil(Math.random() * 100);
    const item = new CartItem(id,
                              `Product ${id}`,
                              price,
                              1);
    this.cartService.addItem(item);
  }

  empty() {
    this.cartService.empty();
  }

  onUpdateQuantity(data: any) {
    this.cartService.updateQuantity(data.id, data.qty);
  }

  onRemoveItem(id: number) {
    this.cartService.removeItem(id);
  }

}
