import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public _http: HttpClient, public _router: Router) {}

  url: string = "http://localhost:3000"

  data = {};
  
  experienceId:string = "";
  
  expContents:object = {}; 

  addExperience(){
    this._http.post(this.url+"/newExperience",this.data)
      .subscribe((response)=>{
        console.log(response)
        this.experienceId = response['_id'];
        this.data = response;
      })
  }

  experinceContent(){
    this._http.get(this.url+"/newExperience/"+this.experienceId)
    .subscribe((response)=>{
      this.expContents = response;
    })
  }  

}
