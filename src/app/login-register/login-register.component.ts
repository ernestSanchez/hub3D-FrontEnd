import { Component, } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {

  
  title = 'hub3d';
  formData = {"username":"","password":""}

  submitData(){
   console.log(this.formData)
   alert("Datos enviados!")
  }

}
