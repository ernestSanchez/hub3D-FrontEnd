import { Component, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {

  constructor(public _http: HttpClient, public _user: UserService, public _router: Router) {

  }

  title = 'hub3d';
  formData = { "username": "", "password": "" }



  submitData() {
    this._user.login(this.formData);
  }
}
