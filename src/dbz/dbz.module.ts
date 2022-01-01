import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes';
import { AgregarComponent } from './agregar-personaje/agregar.component';

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
  ]
})
export class DbzModule { }