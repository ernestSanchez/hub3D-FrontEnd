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



  // experienceId:string = "";
  // expContents:object = {}; 

  dataProyect: object = {};
  proyectId: string = "";
  proyectContent: object = {};
  dataArchive = [];

  createProyect() {

    const idUser = this._user.loggedId;
    this.dataProyect['user_id'] = idUser;

    this._http.post(this.url + "/newProyect", this.dataProyect)
      .subscribe((response) => {
        console.log(response)
        this.proyectId = response['_id'];
        this.dataProyect = response;
      })
  };

  uploadArchives(){
    this._http.post(this.url + "/newProyect", this.dataArchive)
      .subscribe((response) => {
        console.log(response)
        this.proyectId = response['_id'];
        this.dataProyect = response;
      })
  }

  
  allProyects() {
    this._http.get(this.url + "/proyects")
      .subscribe((response) => {
        console.log(response);
      })
  };

  ProyectContent() {
    this._http.get(this.url + "/proyect/" + this.url)
      .subscribe((response) => {
        this.proyectContent = response;
        console.log(response);
      })
  };



  // addExperience(){
  //   this._http.post(this.url+"/newExperience/",this.data)
  //     .subscribe((response)=>{
  //       console.log(response)
  //       this.experienceId = response['_id'];
  //       this.data = response;
  //     })
  // }

  // experinceContent(){
  //   this._http.get(this.url+"/newExperience/"+this.experienceId)
  //   .subscribe((response)=>{
  //     this.expContents = response;
  //   })
  // }  

}
