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
  
  constructor() {
    console.log('CartService created');
   }

   addItem(item: CartItem) {
     this.cartItems.push(item);
   }

   removeItem(id: number){
     const index = this
                    .cartItems
                    .findIndex (item => item.id == id);
     this.cartItems.splice(index, 1);
   }

   updateQuantity(id: number, qty: number) {
     const item = this
                  .cartItems
                  .find(cartItem => cartItem.id == id);

      if (item) {
        item.quantity = qty;
      }
   }

   empty() {
     this.cartItems = [];
   }
}
