import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


import { DataListComponent } from './data-list/data-list.component';
import { DataFormComponent } from './data-form/data-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'novo', redirectTo: '../components/data-form/data-form.component.html' },
  { path: 'data-form', component: DataFormComponent},
  { path: 'data-list', component: DataListComponent },

  // { path: 'editar/:id', component: DataFormComponent },
  // { path: '', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingmodule {};
