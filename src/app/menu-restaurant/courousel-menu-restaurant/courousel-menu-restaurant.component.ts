import {Component, Input} from '@angular/core';
import {IMenuImage} from "../../models/menu";

@Component({
  selector: 'app-courousel-menu-restaurant',
  templateUrl: './courousel-menu-restaurant.component.html',
  styleUrl: './courousel-menu-restaurant.component.css'
})
export class CourouselMenuRestaurantComponent {
  @Input() images : IMenuImage[] = []
  @Input() indicators = true
  @Input() controls = true
  @Input() autoSlide = false
  @Input() slideInterval = 3000


  selectedIndex = 0;
  ngOnInit(): void {
    if (this.autoSlide){
      this.autoSlideImage()
    }
  }

  selectedImage(i: number) {
    this.selectedIndex = i
  }

  onPrevClick() {
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length -1
    }else{
      this.selectedIndex--
    }
  }

  onNextClick() {
    if(this.selectedIndex === this.images.length -1){
      this.selectedIndex = 0
    }else{
      this.selectedIndex++
    }
  }

  private autoSlideImage() {
    setInterval(()=>{
      this.onNextClick()
    }, this.slideInterval)
  }
}
