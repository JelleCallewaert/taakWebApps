import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Spel } from '../spel/spel.model';
import { SpelDataService } from '../spel-data.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Doelgroep} from '../doelgroep/doelgroep.model';
import { Benodigdheid } from '../benodigdheid/benodigdheid.model';

@Component({
  selector: 'app-add-spel',
  templateUrl: './add-spel.component.html',
  styleUrls: ['./add-spel.component.css']
})
export class AddSpelComponent implements OnInit {

  private spel : FormGroup;
  doelgroepen = ["Kleuters", "Actief", "Creatief", "Kastaards"];

  @Output() public nieuwSpel = new EventEmitter<Spel>();

  constructor(private _spelDataService: SpelDataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.spel = this.fb.group({
      titel:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      beschrijving: ['', Validators.required],
      benodigdheden: this.fb.array([this.createBenodigdheden()]),
      minAantal: [''],
      maxAantal: [''],
      doelgroepen: this.fb.array([this.createDoelgroepen()])
    })
  }

  onSubmit(){
    const spel = new Spel(
      this.spel.value.titel, 
      this.spel.value.beschrijving
    );
    for(const nodig of this.spel.value.benodigdheden){
      if(nodig.naam.length > 2 && nodig.aantal > 0){
        spel.addBenodigdheid(new Benodigdheid(nodig.naam, nodig.aantal));
      }
    }
    for(const dg of this.spel.value.doelgroepen){
      
        spel.addDoelgroep(new Doelgroep(dg.naam));
      
    }
    spel.minAantal = this.spel.value.minAantal;
    spel.maxAantal = this.spel.value.maxAantal;
    this.nieuwSpel.emit(spel);
  }

  createBenodigdheden(): FormGroup {
    return this.fb.group({
      aantal: [''],
      naam: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  createDoelgroepen(): FormGroup {
    return this.fb.group({
      naam: ['']
    })
  }

}