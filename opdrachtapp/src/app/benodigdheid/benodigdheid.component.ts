import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-benodigdheid',
  templateUrl: './benodigdheid.component.html',
  styleUrls: ['./benodigdheid.component.css']
})
export class BenodigdheidComponent implements OnInit {

  @Input() naam: string;

  constructor() { }

  ngOnInit() {
  }

}
