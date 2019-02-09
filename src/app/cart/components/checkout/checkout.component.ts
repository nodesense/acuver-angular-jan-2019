// checkout.component.ts
import { Component, OnInit } from '@angular/core';

import {FormGroup,
        FormControl,
        Validators,
        FormBuilder,
        AbstractControl,
        ValidationErrors
      } from '@angular/forms';
import { Order } from '../../models/order';

import {map, 
        filter} from 'rxjs/operators';

function countryValidator(control: AbstractControl): ValidationErrors | null {
  console.log('countryValidator', control.value);
  const country = control.value;
  if (country == 'IN' || country == 'USA') {
    return null; // no error
  }

  // error in country
  return {
    'country': false
  };
}

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
                                    countryValidator
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
        .pipe(map (value => value.trim()))
        .pipe(filter( value => !!value)) // check empty string
        .pipe (filter ( value => this.nameControl.valid))
        .subscribe (value => {
          console.log('name ', value);
          this.order.name = value;
        });

        this.emailControl
        .valueChanges
        .pipe(map (value => value.trim()))
        .pipe(filter( value => !!value)) // check empty string
        .pipe (filter ( value => this.emailControl.valid))
        .subscribe (value => {
          console.log('email ', value);
          this.order.email = value;
        });

        this.countryControl
        .valueChanges
        .pipe(map (value => value.trim()))
        .pipe(filter( value => !!value)) // check empty string
        .pipe (filter ( value => this.countryControl.valid))
        .subscribe (value => {
          console.log('country ', value);
          this.order.country = value;
        });
  }

}
