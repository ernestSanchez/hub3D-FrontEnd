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

  url: string = "http://localhost:3000"

  data = {};

  photoUser: string = "";

  confirmPassword: object = { "password": "" };
  newUserame: object = { "username": "" };

  minCaractersPassword: boolean = false;
  noCoincidePassword: boolean = false;
  userNameRepeat: boolean = false;

  refreshPage() {
    location.reload();
  }


  submit() {
    if (this.confirmPassword['password'] === this.data['password']) {
      // this.dataImageUser = this.photoUser;
        this._http.post("http://localhost:3000/register", this.data)
          .subscribe((response) => {
            if (response["succes"] === "added new user") {
              this._user.isRegister = false;
              alert("Nuevo usuario registrado correctamente");
              this._router.navigate(['/login']);
            } else {
              this.userNameRepeat = true;
            }
          })
    } else {
      this.noCoincidePassword = true;
    }
  }





  ngOnInit(): void {
  }

}
