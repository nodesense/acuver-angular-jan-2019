// checkout.component.ts
import { Component, OnInit } from '@angular/core';

import {FormGroup,
        FormControl,
        Validators,
        FormBuilder
      } from '@angular/forms';
import { Order } from '../../models/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  formGroup: FormGroup;

  nameControl: FormControl;
  emailControl: FormControl;
  countryControl: FormControl;

  order: Order = new Order();


  constructor(private builder: FormBuilder) {
    this.order.name = 'Venkat';
    this.order.email = 'someone@example.com';
    this.order.country  = 'IN';

    this.nameControl = new FormControl(this.order.name, [
                                                    Validators.required,
                                                    Validators.minLength(3)
                                                  ]);
    this.emailControl = new FormControl(this.order.email,  [
                                    Validators.required,
                                    Validators.minLength(6),
                                    Validators.email
                                  ]);
    this.countryControl = new FormControl(this.order.country, [
                                    Validators.required,
                                  ]);

    this.formGroup = this.builder.group({
        'name': this.nameControl,
        'email': this.emailControl,
        'country': this.countryControl
    });
  }

  ngOnInit() {
    this.nameControl
        .valueChanges
        .subscribe (value => {
          console.log('name ', value);
          this.order.name = value;
        });
  }

}
