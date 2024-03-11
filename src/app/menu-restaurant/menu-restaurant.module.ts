import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RestaurantMenuComponent} from "./restaurant-menu/restaurant-menu.component";
import {CourouselMenuRestaurantComponent} from "./courousel-menu-restaurant/courousel-menu-restaurant.component";
import { MenuRestaurantRoutingModule } from './menu-restaurant-routing.module';
import {MatIcon} from "@angular/material/icon";
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    RestaurantMenuComponent,
    CourouselMenuRestaurantComponent,
    StarRatingComponent
  ],

  imports: [
    CommonModule,
    MenuRestaurantRoutingModule,
    MatIcon,
  ]
})
export class MenuRestaurantModule { }
