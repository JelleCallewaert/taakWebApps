import { Component, OnInit } from '@angular/core';
import { Spel } from './spel.model';

@Component({
  selector: 'app-spel',
  templateUrl: './spel.component.html',
  styleUrls: ['./spel.component.css']
})
export class SpelComponent implements OnInit {

  /*naam: string;
  uitleg: string;
  benodigdheden: string[];
  minAantalKinderen: number;
  maxAantalKinderen: number;
  doelgroep: string[];
  /*doelgroep kan ook nieuwe component worden
  toegevoegdOp: Date;*/

  private _spel: Spel;

  constructor() {
    this._spel = new Spel("Tikkertje", "Beschrijving hier!");
    this._spel.addBenodigdheden("kegel", 4);
    this._spel.addBenodigdheden("vestje");
  }

  ngOnInit() {
  }

}
