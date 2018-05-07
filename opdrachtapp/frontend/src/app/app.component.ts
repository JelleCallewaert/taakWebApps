import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  private title: string = "SpelGenerator";

  constructor(){}  

}