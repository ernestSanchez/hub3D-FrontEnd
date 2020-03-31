import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public _user: UserService, public _data: DataService,public _route: ActivatedRoute) {
    

  }






  logOut() {
    document["cookie"] = "megazord= ; path=/";
    this._user.isLogged = false
  }



  //funcion para esconder informacion y opciones si no estas logeado//
  // userProfile() {

  //   if (this._user.contents['name'] !== this._user.contents['name'][""]) {
  //     this._user.infoUserName = true;
  //   } else if (this._user.contents['habilidad'] !== this._user.contents['habilidad'][""]) {
  //     this._user.infoUserHablidad = true;
  //   } else if (this._user.contents['status'] !== this._user.contents['status'][""]) {
  //     this._user.infoUserSatus = true;
  //   } else if (this._user.contents['workStatus'] !== this._user.contents['workStatus'][""]) {
  //     this._user.infoUserWorkStatus = true;
  //   } else if (this._user.contents['location'] !== this._user.contents['location'][""]) {
  //     this._user.infoUserLocation = true;
  //   }
  // }

  submitModify() {

    let newUserModify: object = {
      "_id": this._user.loggedId,
      "username": this._user.contents['username'],
      "name": this._user.contents['name'],
      "secondname": this._user.contents['secondname'],
      "email": this._user.contents['email'],
      "password": this._user.contents['password'],
      "habilidad": this._user.contents['habilidad'],
      "status": this._user.contents['status'],
      "workStatus": this._user.contents['workStatus'],
      "location": this._user.contents['location'],
      "urlReel":this._user.contents['urlReel'],
      "urlImageUser": this._user.contents['urlImageUser']
    }

    this._user.userModification(newUserModify);

  }

  // addPhotoUser(data){
  //   this._user.imageUser(data);
    
  // }

  removeProyect(){
    this._data.deleteProyect(this._data.proyectId)
  }


  ngOnInit(): void {
    //  this._data.userColaborations(this._user.loggedId);
    this._data.filterUserProyects(this._user.loggedId);
    this._data.allColaborations();
    this._user.userContent();
    this._data.allColaborations();
    // this.userProfile();

  }
}
