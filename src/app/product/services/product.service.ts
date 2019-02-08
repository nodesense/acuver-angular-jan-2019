// product.service.ts
import { Injectable } from '@angular/core';
import { environment } 
        from 'src/environments/environment';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
        
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http
               .get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http
               .delete<any>(`${environment.apiEndPoint}/api/products/${id}`)
  }
}
