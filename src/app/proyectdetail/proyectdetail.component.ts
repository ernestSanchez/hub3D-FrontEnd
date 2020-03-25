import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectdetail',
  templateUrl: './proyectdetail.component.html',
  styleUrls: ['./proyectdetail.component.css']
})
export class ProyectdetailComponent implements OnInit {

  constructor(public _data:DataService, public _user:UserService ,public _route: ActivatedRoute,public _router: Router) {
    this._route.paramMap.subscribe(params => {
      let idProyect = params['params']['id'];
      console.log(params);
      console.log(idProyect);
      this._data.ProyectContent(idProyect);
    
    });
   }


 



  ngOnInit(): void {
    
    
  }
  

}
