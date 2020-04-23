import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public _http: HttpClient, public _router: Router, public _user: UserService) { }

  //variable para las llamadas a la Api

  url: string = "http://localhost:3000";

  //variables con los contenidos de los proyectos
  dataProyect: object = {};
  proyectContents: object = {};
  userDataProyect: object = {};
  dataArchive = {};
  proyectsCount: object = [];
  userProyects: object = [];
  proyectId: string = "";
  userId:string = "";
  deleteIdProyect:string = "";

  ///// colaboraciones //////
  dataColaboracion: object = {};
  colaborationId: string = "";
  colaborationsCount: object = [];
  ColaboretionsUserProyect: object = [];
  colaborationUser: object = [];
  // usersInColaboration: object = [];
  
  ///////////////////// llamadas proyectos ////////////////////////

  //llamada creacion proyecto le añado el id del user para luego relacionarlo//
  createProyect() {
    const idUser = this._user.loggedId;
    this.dataProyect['user_id'] = idUser;
    this._http.post(this.url + "/newProyect", this.dataProyect)
      .subscribe((response) => {
        this.dataProyect = response;
        this.proyectId = response['id'];
        this._router.navigateByUrl("/proyectDetail/" + this.proyectId)
      })
  };

  //llamada a todos los proyectos//
  allProyects() {
    this._http.get(this.url + "/proyects")
      .subscribe((response) => {
        this.proyectsCount = response;

      })
  };




  //para filtrar busqueda de proyectos por tipos //

  filterProyects(filter: object) {
    this._http.post(this.url + "/proyects", filter)
      .subscribe((response) => {
       
        this.proyectsCount = response;
      })
  }

  //para filtrar busqueda de proyectos por usuario //
  filterProyectsUser(user: object) {
    this._http.post(this.url + "/proyects", user)
      .subscribe((response) => {
        this.userProyects = response;
      })
  }

  filterUserProyects(user: string) {
    this.filterProyectsUser({ "user_id": user })
  }


  //llamada proyecto por su id (id añadido en proyectdetail.ts /constructor)//

  ProyectContent(proyectId) {
    console.log(proyectId)
    this._http.get(this.url + "/proyect/" + proyectId)
      .subscribe((response) => {
        this.proyectContents = response;
        this.userId = response['user_id'];
        console.log(this.userId);
      })
  };


  userContentProyect(id) {
    id = this.userId;
   this._http.get(this.url +"/user/"+id)
   .subscribe((response)=>{
       this.userDataProyect = response
       console.log(this.userDataProyect)
   })
}

  //llamada eliminar proyecto

  deleteProyect(proyectId) {
    this._http.delete(this.url + "/deleteProyect/" + proyectId)
      .subscribe((response) => {
        this.proyectContents = response;
       
      })
  };




  /////////////////// llamadas colaboraciones //////////////////


  createColaboration() {
    const idUser = this._user.loggedId;
    this.dataColaboracion['user_id'] = idUser;
    this._http.post(this.url + "/newColaboration", this.dataColaboracion)
      .subscribe((response) => {
        this.dataColaboracion = response;
        // this.colaborationIdProyect = reponse[]
        this.colaborationId = response['id'];
        
      })
  };

  allColaborations() {
    this._http.get(this.url + "/colaborations")
      .subscribe((response) => {
        this.colaborationsCount = response;
       
       })
  };



  userContent(user) {
    this._http.get(this.url + "/user/" + user)
      .subscribe((response) => {
        console.log(response)
      })
     }


  deleteColaboration() {
    this._http.delete(this.url + "/deleteColaboration/")
      .subscribe((response) => {
        this.proyectContents = response;
        console.log(response);
      })
  };

}
