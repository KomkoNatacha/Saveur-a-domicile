import {Component} from '@angular/core';
import { NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menubar-main',
  templateUrl: './menubar-main.component.html',
  styleUrl: './menubar-main.component.css'
})
export class MenubarMainComponent {

  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
