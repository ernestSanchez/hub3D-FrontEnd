import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {Routes,RouterModule} from '@angular/router';
import{ HttpClientModule,HttpHeaders } from '@angular/common/http';
import {DataService} from  './services/data.service';
import { GridComponent } from './grid/grid.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { ProyectcreateComponent } from './proyectcreate/proyectcreate.component';
import { ProyectdetailComponent } from './proyectdetail/proyectdetail.component';
import { ProyectsComponent } from './proyects/proyects.component';


const RouterConfig : Routes = [
{"path":"","component": LandingPageComponent},
{"path":"home","component": LandingPageComponent},
{"path": "login","component": LoginRegisterComponent},
{"path":"register","component":RegisterComponent },
{"path":"user","component":UserComponent},
{"path":"user/:id","component":UserComponent},
{"path":"proyectCreate","component":ProyectcreateComponent},
{"path":"proyectDetail/:id","component":ProyectdetailComponent},
{"path":"proyects","component":ProyectsComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    GridComponent,
    LoginRegisterComponent,
    RegisterComponent,
    UserComponent,
    ProyectcreateComponent,
    ProyectdetailComponent,
    ProyectsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(RouterConfig,{useHash:true}),
  ],
  providers: [DataService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
