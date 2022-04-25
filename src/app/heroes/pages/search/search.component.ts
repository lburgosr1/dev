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
  heroes: Array<Heroe>

  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  searching(): void {

    this.heroeService.getSuggestions(this.term)
      .subscribe({
        next: heroes => this.heroes = heroes,
        error: err => console.log(err)
      })

  }

}
