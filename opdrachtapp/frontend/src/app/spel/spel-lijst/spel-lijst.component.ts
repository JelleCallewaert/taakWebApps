import { Component, OnInit } from '@angular/core';
import { Spel } from '../spel.model';
import { SpelDataService } from '../spel-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-spel-lijst',
  templateUrl: './spel-lijst.component.html',
  styleUrls: ['./spel-lijst.component.css'],
  providers: [SpelDataService]
})
export class SpelLijstComponent implements OnInit {

  private _spelen : Spel[];
  errorMsg: string;
  public filterSpelDoelgroep: string;
  public filterSpel$ = new Subject<string>();


  constructor(private _spelDataService : SpelDataService) {
    this.filterSpel$.subscribe(val => (this.filterSpelDoelgroep = val))
  }

  ngOnInit() {
    this._spelDataService.spelen.subscribe(
      spelen => (this._spelen = spelen),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } bij het ophalen van de spelen: ${error.error}`;
      }
    );
  }

  get spelen(){
    return this._spelen;
  }

  removeSpel(spel: Spel) {
    this._spelDataService.verwijderSpel(spel).subscribe(
      item => (this._spelen = this._spelen.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} bij verwijderen van het spel ${
          spel.titel
        }: ${error.error}`;
      }
    );
  }
}
