import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { Spel } from '../spel/spel.model';
import { SpelDataService } from '../spel-data.service';
import { Doelgroep} from '../doelgroep/doelgroep.model';
import { Benodigdheid } from '../benodigdheid/benodigdheid.model';
import { Subject } from '../../../../node_modules/rxjs/Subject';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-spel',
  templateUrl: './add-spel.component.html',
  styleUrls: ['./add-spel.component.css']
})
export class AddSpelComponent implements OnInit {

  private spel : FormGroup;
  private select = "Selecteer doelgroep"
  public alleDoelgroepen = [this.select, "Kleuters", "Actief", "Creatief", "Kastaards"];
  public usedDoelgroepen = [];
  public errorMsg: string;

  @Output() public nieuwSpel = new EventEmitter<Spel>();

  get benodigdheden(): FormArray{
    return <FormArray>this.spel.get('benodigdheden');
  }

  get doelgroepen(): FormArray{
    return <FormArray>this.spel.get('doelgroepen');
  }

  get minAantal(): FormControl{
    return <FormControl>this.spel.get('minAantal');
  }

  get maxAantal(): FormControl{
    return <FormControl>this.spel.get('maxAantal');
  }

  constructor(private _spelDataService: SpelDataService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.spel = this.fb.group({
      'titel':  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      'beschrijving': ['', Validators.required],
      'benodigdheden': this.fb.array([this.createBenodigdheden()]),
      'minAantal': [0, [Validators.max(99), Validators.min(0)]],
      'maxAantal': [0, [Validators.max(99), Validators.min(0)]],
      'doelgroepen': this.fb.array([this.createDoelgroepen()])
    });

    this.benodigdheden.valueChanges
      .subscribe(nodigLijst => {
        const lastElem = nodigLijst[nodigLijst.length - 1];
        if(lastElem.naam && lastElem.naam.length > 1){
          this.benodigdheden.push(this.createBenodigdheden());
        }else if (nodigLijst.length >= 2) {
          const secondToLast = nodigLijst[nodigLijst.length - 2];
          if (
            !lastElem.naam && lastElem.aantal != 0 &&
            (!secondToLast.naam || secondToLast.naam.length < 2)
          ) {
            this.benodigdheden.removeAt(this.benodigdheden.length - 1);
          }
        }
      });

    this.doelgroepen.valueChanges
      .subscribe(dgLijst => {
        const lastElem = dgLijst[dgLijst.length - 1];
        if(lastElem.naam && lastElem.naam != this.select && this.usedDoelgroepen.length < 3){
          this.doelgroepen.push(this.createDoelgroepen());
          this.usedDoelgroepen.push(lastElem.naam);
        }else if(dgLijst.length >= 2) {
          const secondToLast = dgLijst[dgLijst.length - 2];
          if(
            (lastElem.naam == this.select && secondToLast.naam == this.select) || (lastElem.naam == "")
          ){
            this.doelgroepen.removeAt(this.doelgroepen.length - 1)
          }
        }
      })

  }

  onSubmit(){

    if(this.controleerNieuwSpel()){
      const sp = new Spel(
        this.spel.value.titel, 
        this.spel.value.beschrijving
      );
      for(const nodig of this.spel.value.benodigdheden){
        if(nodig.naam.length > 1 && nodig.aantal > 0){
          sp.addBenodigdheid(new Benodigdheid(nodig.naam, nodig.aantal));
        }else if(nodig.naam.length > 1){
          sp.addBenodigdheid(new Benodigdheid(nodig.naam));
        }
      }
      for(const dg of this.spel.value.doelgroepen){
        if(dg.naam.length > 1 && dg.naam != this.select)
          sp.addDoelgroep(new Doelgroep(dg.naam));
        
      }
      sp.minAantal = this.spel.value.minAantal;
      sp.maxAantal = this.spel.value.maxAantal;

      this._spelDataService.voegNieuwSpelToe(sp).subscribe(
        () => {},
        (error: HttpErrorResponse) => {
          this.errorMsg = `Error ${error.status} tijdens het toevoegen van het
            spel ${sp.titel}: ${error.error}`;
        }
      );
      this.spel.reset();
    }
  }

  createBenodigdheden(): FormGroup {
    return this.fb.group({
      aantal: ['', [Validators.min(0), Validators.max(99)]],
      naam: ['', [Validators.minLength(2)]]
    })
  }

  createDoelgroepen(): FormGroup {
    return this.fb.group({
      naam: [this.select]
    })
  }


  controleerNieuwSpel(): boolean{
    let flag: boolean = true;
    if(this.spel.value.titel.length < 2 || this.spel.value.titel.length > 32) {return false}
    if(this.spel.value.beschrijving.length < 0) {return false}
    if(this.spel.value.minAantal < 0 || this.spel.value.minAantal > 99) {return false}
    if(this.spel.value.maxAantal < 0 || this.spel.value.maxAantal > 99) {return false}
    if(this.spel.value.minAantal > this.spel.value.maxAantal) {return false}
    return flag;
  }

}