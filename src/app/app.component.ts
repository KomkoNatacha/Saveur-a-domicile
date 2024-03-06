import {Component, NgModule} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'eat-project';

  constructor(private router: Router) {}

  isClientHomePage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/' || currentUrl === '/signin' || currentUrl === '/signup' || currentUrl === '/menu' ;
  }

  isRestaurantHomePage(): boolean {
    return this.router.url === '/home-restaurant';
  }
}
