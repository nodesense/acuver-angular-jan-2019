import { FormsModule } from '@angular/forms';
// product.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'products',
    component: ProductHomeComponent,
    children: [ // nested navigation
       {
         path: 'list', // products/list
         component: ProductListComponent
       },
       {
         path: 'create',
         component: ProductEditComponent
       },
       {
         path: 'edit/:productId',
         component: ProductEditComponent
       },
       {
         path: 'search',
         component: ProductSearchComponent
       }
    ]
  }
];


@NgModule({
  declarations: [
      ProductHomeComponent,
      ProductListComponent,
      ProductEditComponent,
      ProductSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ]
})
export class ProductModule { }
