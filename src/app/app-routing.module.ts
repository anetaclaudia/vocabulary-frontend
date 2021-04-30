import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordFormComponent} from './word-form/word-form.component';
import {WordSearchFormComponent} from './word-search-form/word-search-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'search-word', pathMatch: 'full' },
  {path: 'add-word', component: WordFormComponent},
  {path: 'search-word', component: WordSearchFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
