import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RestaurantHomeComponent} from "./restaurant-home/restaurant-home.component";
import {RestaurantMenuComponent} from "./menu-restaurant/restaurant-menu/restaurant-menu.component";

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'signin', component : SignInComponent},
  {path: 'signup', component : SignUpComponent},
  {path: 'home-restaurant', component : RestaurantHomeComponent},
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: '**', redirectTo: 'home', pathMatch: "full" },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
