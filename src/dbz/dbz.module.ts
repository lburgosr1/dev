import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes';
import { AgregarComponent } from './agregar-personaje/agregar.component';

import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
      MainPageComponent,
      PersonajesComponent,
      AgregarComponent
  ],
  imports: [
      CommonModule,
      FormsModule
  ],
  exports: [
      MainPageComponent
  ], 
  providers:[
      DbzService
  ]
})
export class DbzModule { }