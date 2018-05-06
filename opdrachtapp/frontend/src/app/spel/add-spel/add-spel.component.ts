import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Spel } from '../spel/spel.model';
import { SpelDataService } from '../../spel-data.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Doelgroep} from '../doelgroep/doelgroep.model';
import { Benodigdheid } from '../benodigdheid/benodigdheid.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-spel',
  templateUrl: './add-spel.component.html',
  styleUrls: ['./add-spel.component.css']
})
export class AddSpelComponent implements OnInit {

  private spel : FormGroup;
  public readonly alleDoelgroepen = ["Alles", "Kleuters", "Actief", "Creatief", "Kastaards"];
  errorMsg: string;

  @Output() public nieuwSpel = new EventEmitter<Spel>();

  constructor(private _spelDataService: SpelDataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.spel = this.fb.group({
      titel:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      beschrijving: ['', Validators.required],
      benodigdheden: this.fb.array([this.createBenodigdheden()]),
      minAantal: ['0', [Validators.max(99), Validators.min(0)]],
      maxAantal: ['0', [Validators.max(99), Validators.min(0)]],
      doelgroepen: this.fb.array([this.createDoelgroepen()])
    })
  }

  onSubmit(){

    if(this.controleerNieuwSpel()){
      const sp = new Spel(
        this.spel.value.titel, 
        this.spel.value.beschrijving
      );
      for(const nodig of this.spel.value.benodigdheden){
        if(nodig.naam.length > 2 && nodig.aantal > 0){
          sp.addBenodigdheid(new Benodigdheid(nodig.naam, nodig.aantal));
        }
      }
      for(const dg of this.spel.value.doelgroepen){
        
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
      aantal: ['0', [Validators.min(0), Validators.max(99)]],
      naam: ['', [Validators.minLength(2)]]
    })
  }

  createDoelgroepen(): FormGroup {
    return this.fb.group({
      naam: ['Alles']
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