import {Component} from '@angular/core';
import { NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menubar-main',
  templateUrl: './menubar-main.component.html',
  styleUrl: './menubar-main.component.css'
})
export class MenubarMainComponent {


  constructor(private router: Router) {
  }

  isLinkActive(url: string): boolean {
    return this.router.url === url;
  }
}
