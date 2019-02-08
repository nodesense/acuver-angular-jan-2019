import { Address } from './../../shared/models/address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  address: Address = null;

  today = new Date();

  constructor() { 
    this.address = new Address();
    this.address.city = 'Blr';
    this.address.state = 'KA';
    this.address.pincode = 560000;
  }

  ngOnInit() {
  }

}
