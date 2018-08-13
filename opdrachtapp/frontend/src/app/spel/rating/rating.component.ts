import { Component, OnInit, Input } from '@angular/core';
import { Rating } from './rating.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() public _rating: Rating;

  constructor() { }

  ngOnInit() {
  }

  get rating(){
    return this._rating;
  }

}
