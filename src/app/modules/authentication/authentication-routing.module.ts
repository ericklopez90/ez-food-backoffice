import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('@modules/authentication/login/login.module')
          .then(m => m.LoginModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('@modules/authentication/forgot-password/forgot-password.module')
          .then(m => m.ForgotPasswordModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
