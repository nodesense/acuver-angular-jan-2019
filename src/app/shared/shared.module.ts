import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  // private to shared module
  declarations: [
  AddressComponent
  ],
  imports: [
    CommonModule
  ],
  // to make component visible to other module
  exports: [
    AddressComponent
  ]
})
export class SharedModule { }
