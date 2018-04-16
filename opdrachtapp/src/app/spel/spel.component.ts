import { Component, Input , OnInit } from '@angular/core';
import { Spel } from './spel.model';

@Component({
  selector: 'app-spel',
  templateUrl: './spel.component.html',
  styleUrls: ['./spel.component.css']
})
export class SpelComponent implements OnInit {

  @Input() public spel: Spel;

  constructor() {
  }

  ngOnInit() {
  }

}
