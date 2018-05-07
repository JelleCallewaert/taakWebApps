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
import { SpelDetailComponent } from './spel-detail/spel-detail.component';
import { SpelResolver } from "./spel-resolver";

const appRoutes = [
    { path: 'spel-lijst', component: SpelLijstComponent },
    { path: 'add-spel', component: AddSpelComponent },
    { path: 'spel-detail/:id', component: SpelDetailComponent, resolve: { spel: SpelResolver} }
  ]

@NgModule({  
  declarations: [
    SpelComponent,
    BenodigdheidComponent,
    DoelgroepComponent,
    AddSpelComponent,
    SpelLijstComponent,
    DoelgroepFilterPipe,
    SpelDetailComponent
  ],
  imports: [
      HttpClientModule,
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(appRoutes)
    ],
    providers: [
        SpelDataService,
        SpelResolver
    ]
  })
  export class SpelModule { }