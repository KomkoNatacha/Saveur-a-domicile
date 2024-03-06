import {Component, OnInit} from '@angular/core';
import {RestauMenuService} from "../../services/restau-menu.service";
import {IMenuItem} from "../../models/menu";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrl: './restaurant-menu.component.css'
})
export class RestaurantMenuComponent implements OnInit{
  images =[
    {
      imageSrc:'assets/images/img1.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc: 'assets/images/img2.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:'assets/images/img3.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:'assets/images/enjoy.png',
      imageAlt: 'person2',
    },
  ]
  public menus : IMenuItem[] = []

  constructor(private menuService: RestauMenuService ) {
  }
  ngOnInit(): void {
    this.menuService.getListMenus().subscribe({
        next: (menu: IMenuItem[]) => {
          this.menus = menu
        },
        error: (msg) => {
          console.log(msg)
        }
      }

    )
  }
}
