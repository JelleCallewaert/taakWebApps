import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SpelModule } from '../spel/spel.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'spel/spel-lijst', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    SpelModule
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
