import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicComponent} from "./public.component";
import {RouterModule} from "@angular/router";
import { HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class PublicModule { }
