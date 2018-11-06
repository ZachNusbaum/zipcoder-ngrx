import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatePreviewComponent } from './state-preview/state-preview.component';

const routes: Routes = [
  {path: '', component: StatePreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
