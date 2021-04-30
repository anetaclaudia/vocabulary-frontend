import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordFormComponent} from './word-form/word-form.component';

const routes: Routes = [
  {path: 'add-word', component: WordFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
