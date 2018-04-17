import { Component } from '@angular/core';
import { Spel } from './spel/spel.model'
import { SpelDataService } from './spel-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpelDataService]
})
export class AppComponent {
  title = 'SpelGenerator';

  private _spelen = new Array<Spel>();
  public filterSpelDoelgroep: string;

  constructor(private _spelDataService: SpelDataService){

  }

  get spelen(): Spel[]{
    return this._spelDataService.spelen;
  }

  nieuwSpelToegevoegd(spel){
    this._spelDataService.voegNieuwSpelToe(spel);
  }

  applyFilter(filter: string){
    this.filterSpelDoelgroep = filter;
  }

}
