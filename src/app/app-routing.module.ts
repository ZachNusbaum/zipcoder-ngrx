import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatePreviewComponent } from './state-preview/state-preview.component';
import { GoogleMapComponent } from './google-map/google-map.component';

const routes: Routes = [
  {path: '', component: StatePreviewComponent},
  {path: 'map', component: GoogleMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
