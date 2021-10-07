import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicComponent} from "./public/public.component";
import {AuthGuard} from "../shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', loadChildren: () => import('./public/home/home.module').then(m => m.HomeModule) },
      { path: 'login', loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./public/register/register.module').then(m => m.RegisterModule) }
    ]
  },

  {
    path: 'dashboard', loadChildren: () => import('./secure/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile', loadChildren: () => import('./secure/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  // path: 'reset/:token'
  { path: 'reset/:token', loadChildren: ()=> import('./reset-pwd/reset-pwd.module').then(m => m.ResetPwdModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
