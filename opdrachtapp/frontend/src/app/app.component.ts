import { Component, OnInit } from '@angular/core';
import { Spel } from './spel/spel.model'
import { SpelDataService } from './spel-data.service';
import { Subject } from 'rxjs/Subject';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpelDataService]
})
export class AppComponent implements OnInit{

  private _spelen: Spel[];
  public errorMsg: string;
  
  title = 'SpelGenerator';

  ngOnInit(){
    this._spelDataService.spelen
      .subscribe(items => this._spelen = items);
  }

  public filterSpelDoelgroep: string;
  public filterSpel$ = new Subject<string>();

  constructor(private _spelDataService: SpelDataService){
    this.filterSpel$.subscribe(value => this.filterSpelDoelgroep = value);
  }

  get spelen(){
    return this._spelen;
  }

  nieuwSpelToegevoegd(spel){
    this._spelDataService.voegNieuwSpelToe(spel)
      .subscribe(item => this._spelen.push(item));
  }

  applyFilter(filter: string){
    this.filterSpelDoelgroep = filter;
  }

  removeSpel(spel){
    this._spelDataService.verwijderSpel(spel).subscribe(item => (this._spelen = this._spelen.filter(val => item.id !== val.id)),
    (error: HttpErrorResponse) => {
      this.errorMsg = `Error ${error.status} while removing recipes for ${
        spel.titel
      }: ${error.error}`;
    }
  );
  }

}
