import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpelLijstComponent } from '../spel/spel-lijst/spel-lijst.component';
import { AddSpelComponent } from '../spel/add-spel/add-spel.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'spel-lijst', component: SpelLijstComponent },
  { path: 'add-spel', component: AddSpelComponent },
  { path: '', redirectTo: 'spel-lijst', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
