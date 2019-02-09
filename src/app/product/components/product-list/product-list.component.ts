import { CartService } from './../../../cart/services/cart.service';
import { CartItem } from './../../../cart/models/cart-item';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  sortField: string;
  sortOrder: string;

  // good to use async pipe
  products: Product[];

  subscription: Subscription;

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  fetchProducts() {
    this.subscription = this.productService
                        .getProducts()
                        .subscribe ( products => {
                          this.products = products;
                        });
  }

  ngOnInit() {
    this.fetchProducts();
  }

  ngOnDestroy() {
    console.log('product list destroy');
    this.subscription.unsubscribe();
  }

  addToCart(product: Product) {
    const item: CartItem = new CartItem(
                                  product.id,
                                  product.name,
                                  product.price,
                                  1
                                );

    this.cartService.addItem(item);
  }

  deleteProduct(id: number) {
    this.productService
        .deleteProduct(id)
        .subscribe( result => {
          console.log('product deleted successfully');
          this.fetchProducts();
        });
  }

}
