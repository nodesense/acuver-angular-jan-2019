// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authenticated = false;
  authenticated$: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {

    if (localStorage.getItem('token')) { // if token present
      this._authenticated = true;
    }

    this.authenticated$ = new BehaviorSubject<boolean>(this._authenticated);
  }

  get authenticated() {
    return this._authenticated;
  }

  set authenticated(value: boolean) {
    this._authenticated = value;
    this.authenticated$.next(this._authenticated);
  }

  getToken() {
    // TODO: get token from local storage
    return localStorage.getItem('token');
  }

  login(username: string, password: string) {
    const data = {
      username: username,
      password: password
    };

    this.http.post(`${environment.authEndPoint}`, data)
             .subscribe( (result: LoginResponse) => {
               console.log('Result ', result);
               // TODO: set local storage

               localStorage.setItem('token', result.token);

               // setter, publish 
               this.authenticated = true;
             });
  }

  logout() {
    // TODO: clear the local storage
    // localStorage.removeItem('token'); // remove one item
    localStorage.clear(); // or remove all
    this.authenticated = false;
  }
}
