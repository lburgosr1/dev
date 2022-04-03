import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: []
})
export class PorCapitalComponent {

  termino: string;
  isError: boolean = false;
  paises: Array<Country>;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;

    this.paisService.searchCapital(termino)
      .subscribe((rest) => {
        this.paises = rest;
      },
        (error) => {
          this.isError = true;
          this.paises = [];
        }
      )
  }
}
