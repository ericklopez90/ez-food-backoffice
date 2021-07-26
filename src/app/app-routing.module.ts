import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/home/home.module')
    .then( m => m.HomeModule )
  },
  {
    path: 'login',
    loadChildren: () => import('@modules/authentication/login/login.module')
    .then( m => m.LoginModule )
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('@modules/authentication/forgot-password/forgot-password.module')
    .then( m => m.ForgotPasswordModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }