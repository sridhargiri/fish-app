import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FishProfileComponent } from './fish-profile/fish-profile.component';

const routes: Routes = [
  { path: '', component: FishProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
