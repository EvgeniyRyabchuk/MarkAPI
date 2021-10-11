import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AuthGuard} from "../shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'workers',
        loadChildren: () => import('./workers/workers.module').then(m => m.WorkersModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'storage',
        loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule),
        canActivate: [AuthGuard]
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule {
}
