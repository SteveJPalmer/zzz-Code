import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './character.component';
import { CharactersComponent } from './characters.component';
import { CharacterListComponent } from './character-list.component';

const routes: Routes = [
  {
    path: 'characters',                 // eagerly loaded so merged into app router definition
    component: CharactersComponent,
    children: [
      { path: '', component: CharacterListComponent },
      { path: ':id', component: CharacterComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRouterModule { }

export const routedComponents = [
  CharactersComponent,
  CharacterListComponent,
  CharacterComponent
];


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/