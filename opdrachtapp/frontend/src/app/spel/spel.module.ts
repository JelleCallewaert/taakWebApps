import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { DoelgroepComponent } from "./doelgroep/doelgroep.component";
import { BenodigdheidComponent } from "./benodigdheid/benodigdheid.component";
import { SpelComponent } from "./spel/spel.component";
import { SpelDataService } from "./spel-data.service";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

import { AddSpelComponent } from "./add-spel/add-spel.component";
import { SpelLijstComponent } from "./spel-lijst/spel-lijst.component";
import { DoelgroepFilterPipe } from "./doelgroep-filter.pipe";

const appRoutes = [
    { path: 'spel-lijst', component: SpelLijstComponent },
    { path: 'add-spel', component: AddSpelComponent },
    { path: ':id', component: SpelComponent }
  ]

@NgModule({  
  declarations: [
    SpelComponent,
    BenodigdheidComponent,
    DoelgroepComponent,
    AddSpelComponent,
    SpelLijstComponent,
    DoelgroepFilterPipe
  ],
  imports: [
      HttpClientModule,
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(appRoutes)
    ],
    providers: [
        SpelDataService
    ]
  })
  export class SpelModule { }