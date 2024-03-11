import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SignInComponent} from "../sign-in/sign-in.component";
import {RestaurantMenuComponent} from "./restaurant-menu/restaurant-menu.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: 'menu', component : RestaurantMenuComponent},
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class MenuRestaurantRoutingModule { }
