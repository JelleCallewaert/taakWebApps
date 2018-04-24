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
    /*
    let spel1 = new Spel("Tikkertje", "Loop weg van de tikker!!!", [], 0,0,[], null);
    let spel2 = new Spel("Stratego", "Versla de tegenstander en verover de vlag!!!", [], 0,0,[], null);
       
    spel1.addBenodigdheden("Vestje");
    spel2.addBenodigdheden("Vestje", 20);
    spel2.addBenodigdheden("vlag", 2);
    spel2.addBenodigdheden("Pakket stratego kaarten", 2);

    spel1.addDoelgroep("kleuters");
    spel1.addDoelgroep("actief");
    spel2.addDoelgroep("actief");

    this._spelen.push(spel1);
    this._spelen.push(spel2);
    */
  }

  get spelen(): Observable<Spel[]> {
    return this.http
      .get(this._appUrl)
      .pipe(
        map((list: any[]) : Spel[] => 
          list.map(item =>
            new Spel(item.titel, item.beschrijving, item.benodigdheden, item.minAantal, item.maxAantal, item.doelgroepen, item.datumCreated)
          )
        )
      );
  }

  getSpel(id: string): Observable<Spel> {
    return this.http
      .get(`${this._appUrl}/spel/${id}`)
      .pipe(map(Spel.fromJSON));
  }

  voegNieuwSpelToe(spel: Spel): Observable<Spel> {
    return this.http
      .post(this._appUrl, spel)
      .pipe(
        map(
          (item: any): Spel => 
          new Spel(item.titel, item.beschrijving, item.benodigdheden, item.minAantal, item.maxAantal, item.doelgroepen, item.datumCreated)
        )
      );
  }

  verwijderSpel(spel: Spel): Observable<Spel> {
    console.log("verwijderspel");
    return this.http
      .delete(`${this._appUrl}/spel/${spel.id}`)
      .pipe(map(Spel.fromJSON));
  }

  deleteSpel(spel: Spel): Observable<Spel> {
    console.log("deletespel");
    return this.http
      .delete(`${this._appUrl}/spel/${spel.id}`)
      .pipe(map(Spel.fromJSON));
  }

}
