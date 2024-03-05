import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RestaurantMenuComponent} from "./restaurant-menu/restaurant-menu.component";
import {CourouselMenuRestaurantComponent} from "./courousel-menu-restaurant/courousel-menu-restaurant.component";
import { MenuRestaurantRoutingModule } from './menu-restaurant-routing.module';

@NgModule({
  declarations: [
    RestaurantMenuComponent,
    CourouselMenuRestaurantComponent
  ],

  imports: [
    CommonModule,
    MenuRestaurantRoutingModule
  ]
})
export class MenuRestaurantModule { }
