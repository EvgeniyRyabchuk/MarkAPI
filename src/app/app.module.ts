import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {NotifierModule} from "angular-notifier";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "./shared/interceptors/auth.interceptor";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NotifierModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
