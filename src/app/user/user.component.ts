import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public _user: UserService, public _data: DataService) {
    

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
      "location": this._user.contents['location']

    }

    this._user.userModification(newUserModify);

  }





  ngOnInit(): void {
    this._data.filterUserProyects(this._user.loggedId);
    this._user.userContent();
    // this.userProfile();

  }
}
