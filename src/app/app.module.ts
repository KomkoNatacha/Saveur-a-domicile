import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenubarMainComponent } from './menubar-main/menubar-main.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle,MatCardModule} from "@angular/material/card";
import {MatGridList, MatGridListModule, MatGridTile} from "@angular/material/grid-list";
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';
import { MenuRestauHomepageComponent } from './menu-restau-homepage/menu-restau-homepage.component';
import { MenuRestaurantModule } from './menu-restaurant/menu-restaurant.module';
import {HttpClientModule} from "@angular/common/http";
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AppComponent,
    MenubarMainComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    RestaurantHomeComponent,
    MenuRestauHomepageComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbar,
    MatButton,
    MatIcon,
    MatIconButton,
    MatCard,
    MatCardTitle,
    MatCardActions,
    MatCardContent,
    MatGridList,
    MatGridTile,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatTabsModule,
    CommonModule,
    MenuRestaurantModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    MatTabsModule


  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
