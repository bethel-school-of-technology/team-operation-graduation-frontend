import { Component } from '@angular/core';
import { User } from '../Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new User();

  constructor() { }

  login() {
    console.log("User logged in");
  }
}
