import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _user: UserService, public _http: HttpClient, public _router: Router) { }

  data = {};

  confirmPassword: object = { "password": "" };

  noCoincidePassword: boolean = false;

  submit() {
    if (this.confirmPassword['password'] == this.data['password']) {
      this._http.post("http://localhost:3000/register", this.data)
        .subscribe((response) => {
          console.log(response)
          this._user.isRegister = false;
          alert("Nuevo usuario registrado correctamente")
          this._router.navigate(['/login'])
        })
    } else {
      this.noCoincidePassword = true;
    }
  }

  ngOnInit(): void {
  }

}
