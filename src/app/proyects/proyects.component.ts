import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {



  constructor(public _data: DataService,public _user:UserService ,public _route: ActivatedRoute, public _router: Router) {}

//filtrado por tipos y categoria
  filterProyects(filter: string) {
    if (filter === 'prop') {
      this._data.filterProyects({ "tipo": filter })
    }
    if(filter === 'character'){
      this._data.filterProyects({ "tipo": filter })
    }
    if(filter === 'bg-set'){
      this._data.filterProyects({ "tipo": filter })
    }
    if(filter === 'concept-personaje'){
      this._data.filterProyects({ "tipo": filter })
    }
    if (filter === 'rig') {
      this._data.filterProyects({ "categoria": filter })
    }
    if(filter === 'model'){
      this._data.filterProyects({ "categoria": filter })
    }
    if(filter === 'animacion'){
      this._data.filterProyects({ "categoria": filter })
    }
    if(filter === 'concept'){
      this._data.filterProyects({ "categoria": filter })
    }
  }


  
    

    
    
    

  ngOnInit(): void {
    this._data.allProyects();
   
  }

}
