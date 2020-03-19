import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public _user: UserService) { }

  logOut(){
    document["cookie"] = "megazord= ; path=/";
    this._user.isLogged = false
   }
 

  ngOnInit(): void {
  }

}
