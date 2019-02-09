// interceptor.service.ts
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor URL ', req.url);

    if (this.authService.authenticated) {
      // inject the token into headers
      req = req.clone({
        setHeaders: {
          Authorization: `JWT ${this.authService.getToken()}`
        }
      });
    }

    return next.handle(req);
  }

}
