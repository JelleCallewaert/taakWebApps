import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Spel } from '../spel/spel.model';
import { SpelDataService } from '../spel-data.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-spel',
  templateUrl: './add-spel.component.html',
  styleUrls: ['./add-spel.component.css']
})
export class AddSpelComponent implements OnInit {

  private spel : FormGroup;

  @Output() public nieuwSpel = new EventEmitter<Spel>();

  constructor(private _spelDataService: SpelDataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.spel = this.fb.group({
      titel:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]]
      //benodigdheden: this.fb.array([this.createBenodigdheden()])
    })
  }

  onSubmit(){
    this.nieuwSpel.emit(new Spel(this.spel.value.titel));
  }

  voegSpelToe(
    nieuwSpelTitel: HTMLInputElement, 
    nieuwSpelBeschrijving: HTMLInputElement, 
    nieuwSpelMinAantal: HTMLInputElement, 
    nieuwSpelMaxAantal: HTMLInputElement
    ): boolean {
      //controle op min en max!!!
    const spel = new Spel(
      nieuwSpelTitel.value, 
      nieuwSpelBeschrijving.value, 
      [], 
      parseInt(nieuwSpelMinAantal.value), 
      parseInt(nieuwSpelMaxAantal.value), 
      [], 
      null);
    this.nieuwSpel.emit(spel);
    return false;
  }
}
