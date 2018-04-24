import { Component, OnInit } from '@angular/core';
import { Spel } from '../spel/spel.model';
import { SpelDataService } from '../spel-data.service';

@Component({
  selector: 'app-spel-lijst',
  templateUrl: './spel-lijst.component.html',
  styleUrls: ['./spel-lijst.component.css']
})
export class SpelLijstComponent implements OnInit {

  private _spelen : Spel[];

  constructor(private _spelDataService : SpelDataService) { }

  ngOnInit() {
    this._spelDataService.spelen
      .subscribe(items => this._spelen = items);
  }

}
