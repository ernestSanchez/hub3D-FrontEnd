import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLogged:boolean = false;

  Logged() {
    if (document["cookie"] !== "megazord= ; path=/") {
      this.isLogged = true;
    }
  }
}
