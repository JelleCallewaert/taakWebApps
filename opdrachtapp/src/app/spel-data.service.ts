import { Injectable } from '@angular/core';
import { Spel } from './spel/spel.model';

@Injectable()
export class SpelDataService {

  private _spelen = new Array<Spel>();

  constructor() {
    let spel1 = new Spel("Tikkertje", "Loop weg van de tikker!!!");
    let spel2 = new Spel("Stratego", "Versla de tegenstander en verover de vlag!!!");
       
    spel1.addBenodigdheden("Vestje");
    spel2.addBenodigdheden("Vestje", 20);
    spel2.addBenodigdheden("vlag", 2);
    spel2.addBenodigdheden("Pakket stratego kaarten", 2);

    this._spelen.push(spel1);
    this._spelen.push(spel2);
  }

  get spelen(): Spel[] {
    return this._spelen;
  }

  voegNieuwSpelToe(spel){
    this._spelen.push(spel);
  }

}
