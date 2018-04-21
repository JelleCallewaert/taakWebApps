import { Component, OnInit } from '@angular/core';
import { Spel } from './spel/spel.model'
import { SpelDataService } from './spel-data.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpelDataService]
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this._spelen = this._spelDataService.spelen;
  }
  title = 'SpelGenerator';

  private _spelen;

  public filterSpelDoelgroep: string;
  public filterSpel$ = new Subject<string>();

  constructor(private _spelDataService: SpelDataService){
    this.filterSpel$.subscribe(value => this.filterSpelDoelgroep = value);
  }

  get spelen(){
    return this._spelen;
  }

  nieuwSpelToegevoegd(spel){
    this._spelDataService.voegNieuwSpelToe(spel);
  }

  applyFilter(filter: string){
    this.filterSpelDoelgroep = filter;
  }

}
