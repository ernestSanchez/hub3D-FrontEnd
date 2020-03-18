import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _user: UserService) { }

  

  logOut(){
   document["cookie"] = "megazord= ; path=/";
   this._user.isLogged = false
  }

  ngOnInit(): void {
  }

}
