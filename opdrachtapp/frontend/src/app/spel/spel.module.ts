import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { SpelDataService } from "./spel-data.service";
import { SpelComponent } from "./spel/spel.component";
import { DoelgroepComponent } from "./doelgroep/doelgroep.component";
import { BenodigdheidComponent } from "./benodigdheid/benodigdheid.component";
import { AddSpelComponent } from "./add-spel/add-spel.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { SpelLijstComponent } from "./spel-lijst/spel-lijst.component";

import { DoelgroepFilterPipe } from "./doelgroep-filter.pipe";
import { SpelDetailComponent } from './spel-detail/spel-detail.component';
import { SpelResolver } from "./spel-resolver";
import { httpInterceptorProviders } from "../http-interceptors";
import { SpelRandomComponent } from './spel-random/spel-random.component';
import { UsedDoelgroepFilterPipe } from './used-doelgroep-filter.pipe';

const appRoutes = [
    { path: 'lijst', component: SpelLijstComponent },
    { path: 'nieuw', component: AddSpelComponent },
    { path: 'random', component: SpelRandomComponent},
    { 
      path: ':id', 
      component: SpelDetailComponent, 
      resolve: { spel: SpelResolver} }
  ]

@NgModule({  
  declarations: [
    SpelComponent,
    BenodigdheidComponent,
    DoelgroepComponent,
    AddSpelComponent,
    SpelLijstComponent,
    DoelgroepFilterPipe,
    SpelDetailComponent,
    SpelRandomComponent,
    UsedDoelgroepFilterPipe
  ],
  imports: [
      HttpClientModule,
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(appRoutes)
    ],
    providers: [
        httpInterceptorProviders,
        SpelDataService,
        SpelResolver
    ]
  })
  export class SpelModule { }