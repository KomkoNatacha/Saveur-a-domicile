import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-menubar-main',
  templateUrl: './menubar-main.component.html',
  styleUrl: './menubar-main.component.css'
})
export class MenubarMainComponent implements  OnInit{

  isHomeActive: boolean = false;

  constructor(private  route : ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(urlSegments =>{
      this.isHomeActive = urlSegments[0].path=='';
    } )
  }
}
