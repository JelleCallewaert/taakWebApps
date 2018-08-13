import { Component, OnInit } from '@angular/core';
import { Spel } from '../spel/spel.model';
import { SpelDataService } from '../spel-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-spel-random',
  templateUrl: './spel-random.component.html',
  styleUrls: ['./spel-random.component.css']
})
export class SpelRandomComponent implements OnInit {

  private _spel : Spel = null;
  private _int : number;
  private _spelen : Spel[] = new Array();
  private _errorMsg : string;

  constructor(private _spelDataService : SpelDataService) { }

  ngOnInit() {
    this._spelDataService.spelen.subscribe(
      spelen => (this._spelen = spelen),
      (error: HttpErrorResponse) => {
        this._errorMsg = `Error ${
          error.status
        } bij het ophalen van de spelen: ${error.error}`;
      }
    );
    this.getRandomSpel();
  }

  get spel(){
    return this._spel;
  }
  set spel(spel: Spel){
    this._spel = spel;
  }
  get spelen(){
    return this._spelen;
  }
  set spelen(spelen: Spel[]){
    this._spelen = spelen;
  }
  
  getRandomSpel(){
    this._int = Math.floor(Math.random() * this._spelen.length);
    this._spel = this._spelen[this._int];
  }

}
