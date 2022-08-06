import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { SelectorPageComponent } from './pages/selector-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MiniMapsComponent } from './components/mini-maps/mini-maps.component';
import { SortPipe } from './common/sort.pipe';



@NgModule({
  declarations: [
    SelectorPageComponent,
    MiniMapsComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule { }
