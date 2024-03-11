import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnChanges{
  public starWidth : number = 0;

  @Input()
  public  rating : number = 2

  @Output()
  public starRatingClick: EventEmitter<string> = new EventEmitter<string>()
  sendRating(){
    this.starRatingClick.emit(`La note est de ${this.rating}`)
  }


  ngOnChanges(): void {
    this.starWidth = this.rating * 125 / 5
  }
}
