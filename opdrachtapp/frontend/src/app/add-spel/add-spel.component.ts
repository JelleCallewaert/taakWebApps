import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Spel } from '../spel/spel.model';

@Component({
  selector: 'app-add-spel',
  templateUrl: './add-spel.component.html',
  styleUrls: ['./add-spel.component.css']
})
export class AddSpelComponent implements OnInit {

  @Output() public nieuwSpel = new EventEmitter<Spel>();

  constructor() { }

  ngOnInit() {
  }

  voegSpelToe(nieuwSpelTitel: HTMLInputElement, nieuwSpelBeschrijving: HTMLInputElement): boolean {
    const spel = new Spel(nieuwSpelTitel.value, nieuwSpelBeschrijving.value, [], 0, 0, [], null);
    this.nieuwSpel.emit(spel);
    return false;
  }

}
