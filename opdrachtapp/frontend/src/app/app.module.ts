import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { SpelComponent } from './spel/spel/spel.component';
import { BenodigdheidComponent } from './spel/benodigdheid/benodigdheid.component';
import { AddSpelComponent } from './spel/add-spel/add-spel.component';
import { DoelgroepFilterPipe } from './doelgroep-filter.pipe';
import { DoelgroepComponent } from './spel/doelgroep/doelgroep.component';
import { AppComponent } from './app.component';
import { SpelLijstComponent } from './spel/spel-lijst/spel-lijst.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'spel-lijst', component: SpelLijstComponent },
  { path: 'add-spel', component: AddSpelComponent },
  { path: '', redirectTo: 'spel-lijst', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    SpelComponent,
    BenodigdheidComponent,
    AddSpelComponent,
    DoelgroepFilterPipe,
    DoelgroepComponent,
    AppComponent,
    SpelLijstComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
