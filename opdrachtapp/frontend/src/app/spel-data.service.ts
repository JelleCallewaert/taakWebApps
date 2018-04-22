import { Injectable } from '@angular/core';
import { Spel } from './spel/spel.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';

@Injectable()
export class SpelDataService {

  private _spelen = new Array<Spel>();
  
  private readonly _appUrl = '/API/spelen/';

  constructor(private http: HttpClient) {
    let spel1 = new Spel("Tikkertje", "Loop weg van de tikker!!!");
    let spel2 = new Spel("Stratego", "Versla de tegenstander en verover de vlag!!!");
       
    spel1.addBenodigdheden("Vestje");
    spel2.addBenodigdheden("Vestje", 20);
    spel2.addBenodigdheden("vlag", 2);
    spel2.addBenodigdheden("Pakket stratego kaarten", 2);

    spel1.addDoelgroep("kleuters");
    spel1.addDoelgroep("actief");
    spel2.addDoelgroep("actief");

    this._spelen.push(spel1);
    this._spelen.push(spel2);
  }

  get spelen(): Observable<Spel[]> {
    return this.http
      .get(this._appUrl)
      .pipe(
        map((list: any[]) : Spel[] => 
          list.map(item =>
            new Spel(item.titel, item.beschrijving)
          )
        )
      );
  }

  voegNieuwSpelToe(spel: Spel){
    spel.addBenodigdheden("niks");
    spel.addDoelgroep("allemaal");
    this._spelen = [...this._spelen, spel];
  }

}
