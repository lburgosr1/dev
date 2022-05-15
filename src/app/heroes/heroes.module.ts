import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { AppSnackBarComponent } from './components/app-snack-bar/app-snack-bar.component';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule } from '@angular/forms';
import { AppDialogComponent } from './components/app-dialog/app-dialog.component';


@NgModule({
  declarations: [
    AddHeroComponent,
    SearchComponent,
    HeroDetailComponent,
    HeroesHomeComponent,
    HeroesListComponent,
    HeroeCardComponent,
    HeroeCardComponent,
    AppSnackBarComponent,
    AppDialogComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
