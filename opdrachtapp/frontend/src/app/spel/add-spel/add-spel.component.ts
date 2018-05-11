import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { Spel } from '../spel.model';
import { SpelDataService } from '../spel-data.service';
import { Doelgroep} from '../doelgroep/doelgroep.model';
import { Benodigdheid } from '../benodigdheid/benodigdheid.model';

@Component({
  selector: 'app-add-spel',
  templateUrl: './add-spel.component.html',
  styleUrls: ['./add-spel.component.css'],
  providers: [ SpelDataService ]
})
export class AddSpelComponent implements OnInit {

  private spel : FormGroup;
  public alleDoelgroepen = ["Kleuters", "Actief", "Creatief", "Kastaards"];
  public usedDoelgroepen = [];
  public errorMsg: string;

  @Output() public nieuwSpel = new EventEmitter<Spel>();

  get benodigdheden(): FormArray{
    return <FormArray>this.spel.get('benodigdheden');
  }

  get doelgroepen(): FormArray{
    return <FormArray>this.spel.get('doelgroepen');
  }

  constructor(private _spelDataService: SpelDataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.spel = this.fb.group({
      titel:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      beschrijving: ['', Validators.required],
      benodigdheden: this.fb.array([this.createBenodigdheden()]),
      minAantal: ['0', [Validators.max(99), Validators.min(0)]],
      maxAantal: ['0', [Validators.max(99), Validators.min(0)]],
      doelgroepen: this.fb.array([this.createDoelgroepen()])
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
        let hulpArray = new Array();
        if(lastElem.naam && lastElem.naam != "Alles" && this.usedDoelgroepen.length < 3){
          //als er iets geselecteerd is dat niet 'Alles' is: nieuwe dropdown
          this.doelgroepen.push(this.createDoelgroepen());
          //toevoegen aan usedDoelgroepen;
          this.usedDoelgroepen.push(lastElem.naam);
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
        if(dg.naam.length > 1)
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
      naam: ['']
    })
  }


  controleerNieuwSpel(): boolean{
    let flag: boolean = true;
    if(this.spel.value.titel.length < 2 || this.spel.value.titel.length > 32) {return false}
    if(this.spel.value.beschrijving.length < 0) {return false}
    if(this.spel.value.minAantal < 0 || this.spel.value.minAantal > 99) {return false}
    if(this.spel.value.maxAantal < 0 || this.spel.value.maxAantal > 99) {return false}
    return flag;
  }

}