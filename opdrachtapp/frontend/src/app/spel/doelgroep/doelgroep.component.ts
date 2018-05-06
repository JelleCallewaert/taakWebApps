import { Component, OnInit, Input } from '@angular/core';
import { Doelgroep } from './doelgroep.model';

@Component({
  selector: 'app-doelgroep',
  templateUrl: './doelgroep.component.html',
  styleUrls: ['./doelgroep.component.css']
})
export class DoelgroepComponent implements OnInit {

  @Input() doelgroep: Doelgroep;

  constructor() { }

  ngOnInit() {
  }
}
