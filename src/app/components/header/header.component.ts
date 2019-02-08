// header.component.ts
import { CartService } from './../../cart/services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

// TODO: take amount$ and totalItems$, display 
// values in header component

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string;

  amount$: Observable<number>;
  totalItems$: Observable<number>;

  constructor(private cartService: CartService) {
    this.amount$ = this.cartService.amount$;
    this.totalItems$ = this.cartService.totalItems$;
   }

  ngOnInit() {
  }

}
