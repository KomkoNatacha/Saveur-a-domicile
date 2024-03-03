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
import {MatIconModule} from "@angular/material/icon";

import {MatInputModule} from "@angular/material/input";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MenubarMainComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    FormsModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
