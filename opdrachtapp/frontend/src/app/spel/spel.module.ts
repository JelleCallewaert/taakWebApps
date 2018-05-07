import { DoelgroepComponent } from "./doelgroep/doelgroep.component";
import { SpelLijstComponent } from "./spel-lijst/spel-lijst.component";
import { AddSpelComponent } from "./add-spel/add-spel.component";
import { BenodigdheidComponent } from "./benodigdheid/benodigdheid.component";
import { SpelComponent } from "./spel/spel.component";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SpelDataService } from "./spel-data.service";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

const appRoutes = [
    { path: 'spel-lijst', component: SpelLijstComponent },
    { path: 'add-spel', component: AddSpelComponent }, 
    { path: '', redirectTo: 'spel-lijst', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ]

@NgModule({
    imports: [
      HttpClientModule,
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(appRoutes)
    ],
    declarations: [
      SpelComponent,
      BenodigdheidComponent,
      DoelgroepComponent,
      AddSpelComponent,
      DoelgroepComponent,
      SpelLijstComponent
    ],
    providers: [
        SpelDataService
    ]
  })
  export class SpelModule { }