import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAgent } from './dashboard-agent/dashboard-agent';
import { DashboardChef } from './dashboard-chef/dashboard-chef';

const routes: Routes = [
  { path: 'agent', component: DashboardAgent },
  { path: 'chef', component: DashboardChef },
  { path: '', redirectTo: 'agent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule { }
