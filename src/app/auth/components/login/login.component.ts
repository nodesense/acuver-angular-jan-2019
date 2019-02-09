import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = 'admin';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {

    this.authService.login(this.username, this.password)

  }

}
