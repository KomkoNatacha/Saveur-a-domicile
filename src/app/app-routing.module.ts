import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RestaurantHomeComponent} from "./restaurant-home/restaurant-home.component";

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'signin', component : SignInComponent},
  {path: 'signup', component : SignUpComponent},
  {path: 'home-restaurant', component : RestaurantHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
