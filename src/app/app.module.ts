import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {Routes,RouterModule} from '@angular/router';
import{ HttpClientModule } from '@angular/common/http';
import {DataService} from  './services/data.service';
import { GridComponent } from './grid/grid.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const RouterConfig : Routes = [
{"path":"","component": LandingPageComponent},
{"path":"home","component": LandingPageComponent},
{"path": "login","component": LoginRegisterComponent},
{"path":"register","component":RegisterComponent },
{"path":"user","component":UserComponent},
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

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(RouterConfig,{useHash:true}),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
