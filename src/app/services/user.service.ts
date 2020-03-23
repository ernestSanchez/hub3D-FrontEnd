import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Routes } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _http: HttpClient, public _router: Router) { }

  isLogged: boolean = false;
  isRegister: boolean = true;
  infoUserName: boolean = false;
  infoUserHablidad: boolean = false;
  infoUserSatus: boolean = false;
  infoUserWorkStatus: boolean = false;
  infoUserLocation: boolean = false;

  url: string = "http://localhost:3000"

  loggedId: string = "";

  contents: object = {};

  allUsersContents: object = {};







  login(formData) {
    this._http.post(this.url + "/login", formData,)
      .subscribe((response) => {
        if (response["success"] === "welcome") {
          
          this.isLogged = true;
          this.loggedId = response['_id'];
          this.infoUserName = true;
          this.infoUserHablidad = true;
          this.infoUserSatus = true;
          this.infoUserWorkStatus = true;
          this.infoUserLocation = true;
          console.log(this.loggedId);
          document["cookie"] = `megazord=${response["token"]};path=/`;
          this._router.navigateByUrl("/home")

        }
      })
  }

  allUsersContent() {
    this._http.get(this.url + "/users")
      .subscribe((response) => {
        this.allUsersContents = response
      })
  }

  userContent() {
    this._http.get(this.url + "/user/" + this.loggedId)
      .subscribe((response) => {
        this.contents = response
        console.log(this.contents)
      })
  }
  userModification(newUserModify: object) {
    const headers = new HttpHeaders({token:document["cookie"]});
      this._http.put(this.url + "/modifyUser", newUserModify,{ headers })
      .subscribe((response) => {
     
      })
  }



}
