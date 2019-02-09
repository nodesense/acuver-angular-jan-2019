import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { PowerPipe } from './pipes/power.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  // private to shared module
  declarations: [
  AddressComponent,
  PowerPipe,
  SortPipe,
  HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  // to make component visible to other module
  exports: [
    AddressComponent,
    PowerPipe,
    SortPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
