import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroe: Heroe;

  constructor(private activateRouter: ActivatedRoute, private heroeService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    
    this.activateRouter.params
    .pipe(
        //Utilizando destructuracion para obtener el Id del objeto
        switchMap(( { id } ) => this.heroeService.getHeroeById(id))
      ) 
      .subscribe({ 
        next: (heroe) => {
          this.heroe = heroe;
        },
        error: (error) => {
          console.log(error);
        } 
      });
  }

  goToBack() {
    this.router.navigate(['/heroes/list'])
  }

}
