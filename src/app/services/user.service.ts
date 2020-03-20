import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, Routes } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _http: HttpClient, public _router: Router ) { }

  isLogged:boolean = false;

  isRegister:boolean = true;

  url:string = "http://localhost:3000"

  loggedId:string = "" ;

  contents: object = {};

  

  Logged() {
    if (document["cookie"] !== "megazord= ; path=/") {
      this.isLogged = true;
     
    }
  }
  



  login(formData) {
    this._http.post(this.url+"/login", formData)
      .subscribe((response) => {
        if (response["success"] === "welcome") {
          this.isLogged = true;
          this.loggedId = response['_id'];
          document["cookie"] = `megazord=${response["token"]};path=/`;
          this._router.navigateByUrl("/home")
          
        }
      })
  }



  userContent(){
    this._http.get(this.url+"/user/"+this.loggedId)
    .subscribe((response)=>{
      this.contents = response
      console.log(this.contents)
    })
  }
}
