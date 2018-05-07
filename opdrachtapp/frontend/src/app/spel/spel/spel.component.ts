import { Component, Input, Output , OnInit, EventEmitter } from '@angular/core';
import { Spel } from '../spel.model';

@Component({
  selector: 'app-spel',
  templateUrl: './spel.component.html',
  styleUrls: ['./spel.component.css']
})
export class SpelComponent implements OnInit {

  @Input() public spel: Spel;
  @Output() public deleteSpel = new EventEmitter<Spel>();

  constructor() {
  }

  ngOnInit() {
  }

  removeSpel(){
    this.deleteSpel.emit(this.spel);
  }
  

}
