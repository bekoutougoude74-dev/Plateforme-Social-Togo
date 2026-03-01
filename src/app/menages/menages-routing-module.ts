import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenagesList } from './menages-list/menages-list';
import { MenageForm } from './menage-form/menage-form';
import { MenageDetail } from './menage-detail/menage-detail';

const routes: Routes = [
  { path: '', component: MenagesList },
  { path: 'nouveau', component: MenageForm },
  { path: ':id', component: MenageDetail }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenagesRoutingModule { }
