import { Injectable } from '@angular/core';
import { Spel } from './spel.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';
import { Benodigdheid } from './benodigdheid/benodigdheid.model';

@Injectable()
export class SpelDataService {

  private _spelen = new Array<Spel>();
  
  private readonly _appUrl = '/API/';


  constructor(private http: HttpClient) {

  }

  get spelen(): Observable<Spel[]> {
    return this.http
      .get(`${this._appUrl}/spelen`)
      .pipe(
        map((list: any[]) : Spel[] => 
          list.map(Spel.fromJSON)
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
      .post(`${this._appUrl}/spelen`, spel)
      .pipe(
        map(
        Spel.fromJSON
        )
      );
  }

  voegBenodigdheidToeAanSpel(nodig: Benodigdheid, spel: Spel) : Observable<Benodigdheid>{
    const url = `${this._appUrl}/spel/${spel.id}/benodigdheden`;
    return this.http.post(url, spel).pipe(map(Benodigdheid.fromJSON));
  }

  verwijderSpel(spel: Spel): Observable<Spel> {
    console.log(spel.id);
    console.log(spel.titel);
    return this.http
      .delete(`${this._appUrl}/spel/${spel.id}`)
      .pipe(map(Spel.fromJSON));
  }

}
