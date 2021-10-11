import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorageComponent} from "./storage.component";
import {StorageRoutingModule} from "./storage-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AddModalModule} from "../../shared/components/add-modal/add-modal.module";



@NgModule({
  declarations: [StorageComponent],
  imports: [
    CommonModule,
    StorageRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    AddModalModule
  ]
})
export class StorageModule { }
