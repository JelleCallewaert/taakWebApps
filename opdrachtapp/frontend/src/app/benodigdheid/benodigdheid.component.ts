import { Component, OnInit, Input } from '@angular/core';
import { Benodigdheid } from './benodigdheid.model';

@Component({
  selector: 'app-benodigdheid',
  templateUrl: './benodigdheid.component.html',
  styleUrls: ['./benodigdheid.component.css']
})
export class BenodigdheidComponent implements OnInit {

  @Input() benodigdheid: Benodigdheid;
  constructor() { }

  ngOnInit() {
  }
}
