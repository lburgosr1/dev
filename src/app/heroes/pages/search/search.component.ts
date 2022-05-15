import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term: string = '';
  heroes: Array<Heroe> = [];
  heroeSelected: Heroe;

  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  searching(): void {

    this.heroeService.getSuggestions(this.term)
      .subscribe({
        next: heroes => this.heroes = heroes,
        error: err => console.log(err)
      });
  }

  optionSelected(event: any) {

    if(!event.option.value) {
      this.heroeSelected = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.term = heroe.superhero;


    this.heroeService.getHeroeById(heroe.id).subscribe({
      next: (heroe) => this.heroeSelected = heroe,
      error: (err) => console.log(err)
    });
  }

}
