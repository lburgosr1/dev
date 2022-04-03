import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    PaisModule, 
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
