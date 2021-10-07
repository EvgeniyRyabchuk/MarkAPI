import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {Router, RouterModule, Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSortModule} from "@angular/material/sort";
import {MatTabsModule} from '@angular/material/tabs';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WorkersComponent } from './workers/workers.component';
import {MatIconModule} from '@angular/material/icon';
const routes: Routes =
[
  {
    path: '', component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent, WarehouseComponent, WorkersComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatPaginatorModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTabsModule,
        MatIconModule
    ]
})
export class DashboardModule { }
