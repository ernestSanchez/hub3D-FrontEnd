import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Routes ,ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public _http: HttpClient, public _router: Router, public _user: UserService) { }

//variable para las llamadas a la Api
  
url: string = "http://localhost:3000";
 
//variables con los contendos de los proyectos
  dataProyect: object = {};
  proyectContents: object = {};
  dataArchive = {};
  proyectsCount:object = [];
  userProyects:object = [];
  proyectId:string = "";

//llamadas proyecto//

  //llamada creacion proyecto le añado el id del user para luego relacionarlo//
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

  //llamada para subida de archivos en cada proyecto
  uploadArchives() {
    this._http.post(this.url + "/", this.dataArchive)
      .subscribe((response) => {
        console.log(response)
        this.dataArchive = response;
      })
  }

//llamada a todos los proyectos//
  allProyects() {
    this._http.get(this.url + "/proyects")
      .subscribe((response) => {
        console.log(response)
        this.proyectsCount = response;
      })
  };
//para filtrar busqueda de proyectos por tipos //

  filterProyects(filter:object) {
    this._http.post(this.url + "/proyects", filter)
      .subscribe((response) => {
        console.log(response)
        this.proyectsCount = response;
      })
  }

//para filtrar busqueda de proyectos por usuario //
  filterProyectsUser(user:object) {
    this._http.post(this.url + "/proyects", user)
      .subscribe((response) => {
        this.userProyects = response;
      })
  }

  filterUserProyects(user: string) {
    // user = this._user.loggedId
   
      this.filterProyectsUser({ "user_id": user })
   
  }


  //llamada proyecto por su id (id añadido en proyectdetail.ts /constructor)//

  ProyectContent(proyectId) {
    this._http.get(this.url + "/proyect/" + proyectId)
      .subscribe((response) => {
        this.proyectContents = response;
        console.log(response);
      })
  };

  //llamada eliminar proyecto

  deleteProyect() {
    this._http.delete(this.url + "/deleteProyect/" )
      .subscribe((response) => {
        this.proyectContents = response;
        console.log(response);
      })
  };



}
