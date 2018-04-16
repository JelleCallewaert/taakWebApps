import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-spel',
  templateUrl: './add-spel.component.html',
  styleUrls: ['./add-spel.component.css']
})
export class AddSpelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  voegSpelToe(nieuwSpelTitel: HTMLInputElement, nieuwSpelBeschrijving: HTMLInputElement){
    console.log(nieuwSpelTitel.value);
    console.log(nieuwSpelBeschrijving.value);
    return false;
  }

}
