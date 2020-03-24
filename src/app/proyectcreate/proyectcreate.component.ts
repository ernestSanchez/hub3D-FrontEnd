import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-proyectcreate',
  templateUrl: './proyectcreate.component.html',
  styleUrls: ['./proyectcreate.component.css']
})
export class ProyectcreateComponent implements OnInit {

  constructor(public _data : DataService) { }


submitNewProyect(){
  this._data.createProyect();
}
  
  ngOnInit(): void {
  }

}
