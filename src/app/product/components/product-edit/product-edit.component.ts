import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit, ViewChild } from '@angular/core';

// read data from url :productId
import {ActivatedRoute} from '@angular/router';

// programatically visit one page from another one
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from '../../models/brand';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  brands$: Observable<Brand[]>;

  message: string;

  @ViewChild('productForm')
  form: NgForm;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }


  gotoList() {
    this.router.navigateByUrl('/products/list');
  }

  ngOnInit() {
    const id = this.route.snapshot.params['productId'];
    console.log('id is ', id);

    this.brands$ = this.productService.getBrands();

    if (id) { // id present, edit the data
      this.productService
          .getProduct(id)
          .subscribe(product => {
            this.product = product;
          });
    }

  }

  save() {

    if (this.form.pristine) {
      alert('No data changes');
      return;
    }

    this.message = 'saving product ....';
     this.productService
          .saveProduct(this.product)
          .subscribe ( product => {
            console.log('product saved ', product);
            this.product = product;
            this.message = 'product saved successfully';
            this.gotoList();
          });
  }

}
