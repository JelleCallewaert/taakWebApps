import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SpelComponent } from './spel/spel.component';
import { BenodigdheidComponent } from './benodigdheid/benodigdheid.component';
import { AddSpelComponent } from './add-spel/add-spel.component';
import { DoelgroepFilterPipe } from './doelgroep-filter.pipe';
import { DoelgroepComponent } from './doelgroep/doelgroep.component';


@NgModule({
  declarations: [
    AppComponent,
    SpelComponent,
    BenodigdheidComponent,
    AddSpelComponent,
    DoelgroepFilterPipe,
    DoelgroepComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
