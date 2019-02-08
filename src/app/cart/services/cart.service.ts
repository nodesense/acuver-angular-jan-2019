// cart.service.ts
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

// share data with components
// retain data when component destroyed
// implementing api calls
// write business logic without UI

@Injectable({
  // root represent, glboal, singleton service object
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  amount = 0;
  totalItems = 0;

  constructor() {
    console.log('CartService created');
   }

   calculate() {
     this.amount = 0;
     this.totalItems = 0;

     for (const item of this.cartItems) {
       this.amount += item.price * item.quantity;
       this.totalItems += item.quantity;
     }

     console.log('calculate ', this.amount, this.totalItems);
   }

   addItem(item: CartItem) {
     this.cartItems.push(item);
     this.calculate();
   }

   removeItem(id: number){
     const index = this
                    .cartItems
                    .findIndex (item => item.id == id);
     this.cartItems.splice(index, 1);
     this.calculate();
   }

   updateQuantity(id: number, qty: number) {
     const item = this
                  .cartItems
                  .find(cartItem => cartItem.id == id);

      if (item) {
        item.quantity = qty;
      }

      this.calculate();
   }

   empty() {
     // this.cartItems = [];
     
     this.cartItems.splice(0, this.cartItems.length);
     this.calculate();
   }
}
