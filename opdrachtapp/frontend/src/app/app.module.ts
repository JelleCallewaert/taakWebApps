import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SpelComponent } from './spel/spel.component';
import { BenodigdheidComponent } from './benodigdheid/benodigdheid.component';
import { AddSpelComponent } from './add-spel/add-spel.component';
import { DoelgroepFilterPipe } from './doelgroep-filter.pipe';
import { DoelgroepComponent } from './doelgroep/doelgroep.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    SpelComponent,
    BenodigdheidComponent,
    AddSpelComponent,
    DoelgroepFilterPipe,
    DoelgroepComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
