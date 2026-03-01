import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentList } from './resident-list/resident-list';
import { ResidentForm } from './resident-form/resident-form';

const routes: Routes = [
  { path: '', component: ResidentList },
  { path: 'nouveau', component: ResidentForm }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentsRoutingModule { }
