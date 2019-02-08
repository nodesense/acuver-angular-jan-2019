// cart-item.component.ts
import { CartItem } from './../../models/cart-item';
import { Component, OnInit, Input,
          Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()
  cartItem: CartItem;

  // child to parent, always using event emitter
  @Output()
  removeItem: EventEmitter<number> = new EventEmitter();

  @Output()
  updateQuantity: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  incr() {
    const data: any = {
      id: this.cartItem.id,
      qty: this.cartItem.quantity + 1
    };
    this.updateQuantity.emit(data);
  }

  decr() {
    const data: any = {
      id: this.cartItem.id,
      qty: this.cartItem.quantity - 1
    };
    this.updateQuantity.emit(data);
  }

  remove() {
    // emit the event/ publish an event
    this.removeItem.emit(this.cartItem.id);
  }

}
