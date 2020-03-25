import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public _http: HttpClient, public _router: Router, public _user: UserService) { }

  url: string = "http://localhost:3000";



  ;

  dataProyect: object = {};
  proyectContents: object = {};
  dataArchive = {};
  proyects = [];
  proyectId:string = "";

  createProyect() {

    const idUser = this._user.loggedId;
    this.dataProyect['user_id'] = idUser;

    this._http.post(this.url + "/newProyect", this.dataProyect)
      .subscribe((response) => {
       
        this.dataProyect = response;
        this.proyectId = response['id'];
        console.log(this.proyectId)
        this._router.navigateByUrl("/proyectDetail/"+this.proyectId)
      })
  };

  uploadArchives() {
    this._http.post(this.url + "/", this.dataArchive)
      .subscribe((response) => {
        console.log(response)
        this.dataArchive = response;
      })
  }


  allProyects() {
    this._http.get(this.url + "/proyects")
      .subscribe((response) => {
        this.proyects = [response]
      })
  };

  ProyectContent(proyectId) {
    this._http.get(this.url + "/proyect/" + proyectId)
      .subscribe((response) => {
        this.proyectContents = response;
        console.log(response);
      })
  };

}
