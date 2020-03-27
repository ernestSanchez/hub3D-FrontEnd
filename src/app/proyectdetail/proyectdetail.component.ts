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
    //para dar el valor del id de proyecto//
    this._route.paramMap.subscribe(params => {
      let idProyect = params['params']['id'];
      console.log(params);
      console.log(idProyect);
      this._data.ProyectContent(idProyect);
    
    });
   }

   //funcion para ver el usuario del proyecto seleccionado
   userProyect(){
    if (this._user.isLogged ==  false){
       this._user.loggedId = this._data.proyectContents['user_id']
       console.log(this._user.loggedId)
       this._router.navigateByUrl("/user/"+this._user.loggedId)
    }
  }



  ngOnInit(): void {
    
    
  }
  

}