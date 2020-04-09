import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public _user: UserService, public _data: DataService, public _route: ActivatedRoute, public _http: HttpClient) {


  }



  photoUser: string = "";



  logOut() {
    document["cookie"] = "megazord= ; path=/";
    this._user.isLogged = false
  }



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
      "urlReel": this._user.contents['urlReel'],
      "urlImageUser": this.photoUser
    }
    console.log(newUserModify)
    this._user.userModification(newUserModify);
    this._user.imgUser = true;
  }
  selectedFile: File = null;

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event)
  }


  imageUser() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this._http.post(`${this._user.url}/upload/`, fd)
      .subscribe((response) => {
        this.photoUser = response['secure_url'];
        let dataUser = this._user.contents['urlImageUser'];
        dataUser = this.photoUser;
      

      })
  }




  removeProyect() {
    this._data.deleteProyect(this._data.proyectId)
  }


  ngOnInit(): void {
    this._data.filterUserProyects(this._user.loggedId);
    this._user.previewImage()
    this._data.allColaborations();
    this._user.userContent();
    this._data.allColaborations();

  }
}
