import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doelgroep',
  templateUrl: './doelgroep.component.html',
  styleUrls: ['./doelgroep.component.css']
})
export class DoelgroepComponent implements OnInit {

  @Input() naam: string;

  constructor() { }

  ngOnInit() {
  }

}
