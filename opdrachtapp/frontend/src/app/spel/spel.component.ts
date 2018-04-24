import { Component, Input, Output , OnInit, EventEmitter } from '@angular/core';
import { Spel } from './spel.model';
import { AppComponent } from '../app.component';

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

  verwijderSpel(){
    this.deleteSpel.emit(this.spel);
    console.log("emit");
  }

}
