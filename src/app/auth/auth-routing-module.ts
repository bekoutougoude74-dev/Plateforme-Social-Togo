import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { TwoFactor } from './two-factor/two-factor';
import { RegisterComponent } from './register/register';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: RegisterComponent },
  { path: '2fa', component: TwoFactor },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
