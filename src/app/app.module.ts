import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {Routes,RouterModule} from '@angular/router';
import{ HttpClientModule } from '@angular/common/http';
import {DataService} from  './services/data.service';
import { GridComponent } from './grid/grid.component';

const RouterConfig : Routes = [
{"path":"","component": LandingPageComponent},
{"path":"home","component": LandingPageComponent},
// {"path":},
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(RouterConfig,{useHash:true}),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
