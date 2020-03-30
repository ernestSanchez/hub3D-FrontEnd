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

  //variables con los contendos de los proyectos
  dataProyect: object = {};
  proyectContents: object = {};
  dataArchive = {};
  proyectsCount: object = [];
  userProyects: object = [];
  proyectId: string = "";
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

  //llamada para subida de archivos en cada proyecto
  uploadArchives() {
    this._http.post(this.url + "/upload", this.dataArchive)
      .subscribe((response) => {
        console.log(response)
        this.dataArchive = response;
      })
  }

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
    // user = this._user.loggedId
    this.filterProyectsUser({ "user_id": user })
  }


  //llamada proyecto por su id (id añadido en proyectdetail.ts /constructor)//

  ProyectContent(proyectId) {
    this._http.get(this.url + "/proyect/" + proyectId)
      .subscribe((response) => {
        this.proyectContents = response;
        // console.log(response);
      })
  };

  //llamada eliminar proyecto

  deleteProyect(proyectId) {
    this._http.delete(this.url + "/deleteProyect/" + proyectId)
      .subscribe((response) => {
        this.proyectContents = response;
        console.log(response);
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
        console.log(this.dataColaboracion);
      })
  };

  allColaborations() {
    this._http.get(this.url + "/colaborations")
      .subscribe((response) => {
        this.colaborationsCount = response;
        console.log(this.colaborationsCount)
       })
  };



//  userColaborations(id) {
//     for (let i = 0; i < this.colaborationsCount.length; i++) {
//       if (id == this.colaborationsCount[i].user_id) {
//         this.userContent(this.colaborationsCount[i].user_id)
//       }
//     }
//   }
  userContent(user) {
    this._http.get(this.url + "/user/" + user)
      .subscribe((response) => {
        // this.usersInColaboration = response;
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
