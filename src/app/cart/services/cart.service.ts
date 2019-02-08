// cart.service.ts
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

import {Subject} from 'rxjs';

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
  private _amount = 0;
  private _totalItems = 0;

  // observable of number
  amount$: Subject<number> = new Subject();
  totalItems$: Subject<number> = new Subject();

  constructor() {
    console.log('CartService created');
   }

   // getter
   get amount() {
     return this._amount;
   }

   set amount(value: number) {
     this._amount = value;
     // Publish the values using rxjs
     // next publish the value
     this.amount$.next(this._amount);
   }

   get totalItems() {
     return this._totalItems;
   }

   set totalItems(value: number) {
     this._totalItems = value;
     this.totalItems$.next(this._totalItems);
   }

   calculate() {
     let amount = 0;
     let totalItems = 0;

     for (const item of this.cartItems) {
       amount += item.price * item.quantity;
       totalItems += item.quantity;
     }

     console.log('calculate ', amount, totalItems);

     // setter amount
     this.amount = amount;

     // setter totalItems
     this.totalItems = totalItems;
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
