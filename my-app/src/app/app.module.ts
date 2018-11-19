import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponentComponent } from './Components/home-screen-component/home-screen-component.component';
import { SecondScreenComponentComponent } from "./Components/second-screen-component/second-screen-component.component";
import { ThirdScreenComponentComponent } from "./Components/third-screen-component/third-screen-component.component";

import { Routes, RouterModule } from "@angular/router";
export const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeScreenComponentComponent},
  {path: 'second', component: SecondScreenComponentComponent},
  {path: 'third', component: ThirdScreenComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponentComponent,
    SecondScreenComponentComponent,
    ThirdScreenComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
