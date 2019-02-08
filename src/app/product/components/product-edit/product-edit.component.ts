import { Component, OnInit } from '@angular/core';

// read data from url :productId
import {ActivatedRoute} from '@angular/router';

// programatically visit one page from another one
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }


  gotoList() {
    this.router.navigateByUrl('/products/list');
  }

  ngOnInit() {
    const id = this.route.snapshot.params['productId'];
    console.log('id is ', id);
  }

  save() {
    this.gotoList();
  }

}
