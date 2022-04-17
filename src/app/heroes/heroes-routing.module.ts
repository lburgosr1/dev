import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';


const routes: Routes = [
  {
    path: '',
    component: HeroesHomeComponent,
    children: [
      { path: 'list', component: HeroesListComponent },
      { path: 'add', component: AddHeroComponent },
      { path: 'edit/:id', component: AddHeroComponent },
      { path: 'search', component: SearchComponent },
      { path: ':id', component: HeroDetailComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
