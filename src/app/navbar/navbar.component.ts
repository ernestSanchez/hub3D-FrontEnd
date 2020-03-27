import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _user: UserService, public _data: DataService) { }




  logOut() {
    document["cookie"] = "megazord= ; path=/";
    this._user.isLogged = false
  }

  ngOnInit(): void {
    this._data.allProyects();
    }

}
