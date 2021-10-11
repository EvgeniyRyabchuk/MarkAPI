import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        DashboardRoutingModule,
        MatTabsModule,
        MatButtonModule,
    ]
})

export class DashboardModule { }
