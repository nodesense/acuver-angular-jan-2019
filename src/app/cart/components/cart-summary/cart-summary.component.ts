// cart-summary.component.ts
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  amount: number;
  totalItems: number;

  constructor(private cartService: CartService) {
      this.amount  = cartService.amount;
      this.totalItems = cartService.totalItems;
   }

  ngOnInit() {
  }

}
