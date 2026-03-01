import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammesList } from './programmes-list/programmes-list';
import { ProgrammeForm } from './programme-form/programme-form';
import { EligibleMenages } from './eligible-menages/eligible-menages';

const routes: Routes = [
  { path: '', component: ProgrammesList },
  { path: 'nouveau', component: ProgrammeForm },
  { path: 'eligibilite', component: EligibleMenages }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammesRoutingModule { }
