import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';



   


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _http: HttpClient) { }

  data = {};

  submit(){
    this._http.post("http://localhost:3000/register",this.data)
    .subscribe((response) => {
      console.log(response)
    })
  }

  ngOnInit(): void {
  }

}
