import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Spel } from '../spel/spel.model';
import { SpelDataService } from '../spel-data.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Doelgroep} from '../doelgroep/doelgroep.model';

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
      titel:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      beschrijving: ['', Validators.required],
      benodigdheden: this.fb.array([this.createBenodigdheden()]),
      minAantal: [0],
      maxAantal: [0]
    })
  }

  onSubmit(){
    this.nieuwSpel.emit(new Spel(
      this.spel.value.titel,
      this.spel.value.beschrijving,
      [],
      this.spel.value.minAantal,
      this.spel.value.maxAantal,
      []
    ));
  }

  createBenodigdheden(): FormGroup {
    return this.fb.group({
      aantal: [''],
      naam: ['', Validators.required]
    })
  }

}