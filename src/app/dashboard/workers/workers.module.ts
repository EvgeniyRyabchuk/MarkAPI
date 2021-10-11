import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkersComponent} from "./workers.component";
import {WorkersRoutingModule} from "./workers-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [WorkersComponent],
  imports: [
    CommonModule,
    WorkersRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class WorkersModule {
}
