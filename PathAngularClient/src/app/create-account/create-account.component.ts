import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  user = new User();

  constructor() { }

  register() {
    console.log("User registered");
  }
}
