import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Routes } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _http: HttpClient, public _router: Router) { }

  //variables para ocultar elementos si no estas logeado

  isLogged: boolean = false;
  isRegister: boolean = true;
  infoUserName: boolean = false;
  infoUserHablidad: boolean = false;
  infoUserSatus: boolean = false;
  infoUserWorkStatus: boolean = false;
  infoUserLocation: boolean = false;
  imgUser: boolean = false;
  imgUserDefault: boolean = false;

  //variable para abreviar direccion de la api

  url: string = "http://localhost:3000"

  //var id de usuario logeado
  loggedId: string = "";

  //var contenido de usuario logeado 
  contents: object = {};



  //var todos los usuarios en la api
  allUsersContents: object = {};

  // var para poner el mail de usuario en el boton de contact
  userMail = this.contents['email']
  mailUser = `mailto:${this.userMail}`;
  urlImgUser: string = ""


  //llamada login y autentificacion de datos comparacion envio de cookies
  login(formData) {
    this._http.post(this.url + "/login", formData)
      .subscribe((response) => {
        if (response["success"] === "welcome") {

          this.isLogged = true;
          this.loggedId = response['_id'];
          this.infoUserName = true;
          this.infoUserHablidad = true;
          this.infoUserSatus = true;
          this.infoUserWorkStatus = true;
          this.infoUserLocation = true;

          document["cookie"] = `megazord=${response["token"]};path=/`;


          this._router.navigateByUrl("/home")

        }
      })
  }





  //llamada a todos los usuarios
  allUsersContent() {
    this._http.get(this.url + "/users")
      .subscribe((response) => {
        this.allUsersContents = response
       
      })
  }

  //llamada a contenido de usuario por id
  userContent() {
    this._http.get(this.url + "/user/" + this.loggedId)
      .subscribe((response) => {
        this.contents = response
        this.urlImgUser = response['urlImageUser']

      })
  }

  previewImage() {
    if (this.urlImgUser !== undefined || this.urlImgUser !== "") {
        this.imgUser =  true;
    }

  }

  //llamada de modificacion de usuario logeado
  userModification(newUserModify: object) {
    const headers = new HttpHeaders({ "Set-Cookie": document["cookie"] });
    // let options = { withCredentials: true };

    this._http.put(this.url + "/modifyUser", newUserModify, { headers })
      .subscribe((response) => {

      })
  }


  ngOnInit(): void {


  }

}
