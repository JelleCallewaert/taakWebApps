import { Component, OnInit } from '@angular/core';
import { Spel } from '../spel/spel.model';
import { ActivatedRoute } from '@angular/router';
import { SpelDataService } from '../spel-data.service';

@Component({
  selector: 'app-spel-detail',
  templateUrl: './spel-detail.component.html',
  styleUrls: ['./spel-detail.component.css']
})
export class SpelDetailComponent implements OnInit {

  private _spel: Spel;

  constructor(private route: ActivatedRoute, private spelDataService: SpelDataService) {}

  ngOnInit() {
    this.route.data.subscribe(item => 
      this._spel = item['spel']);
  }

  get spel(): Spel{
    return this._spel;
  }

}
