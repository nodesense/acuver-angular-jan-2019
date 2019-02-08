// cart-summary.component.ts
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  amount$: Observable<number>;
  totalItems$: Observable<number>;

  myAmount: number;

  constructor(private cartService: CartService) {
      this.amount$  = cartService.amount$;
      this.totalItems$ = cartService.totalItems$;
   }

  ngOnInit() {
    this.amount$
        .subscribe ( (amount: number) => { // called when .next called
            console.log('subscribe got new amount ', amount);
            this.myAmount = amount;
        });
  }

}
