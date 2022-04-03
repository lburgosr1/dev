import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent {

  termino: string;
  isError: boolean = false;
  paises: Array<Country>;

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.isError = false;
    this.termino = termino;

    this.paisService.searchCountry(termino)
      .subscribe( (rest)=>{
            this.paises = rest;
          },
          (error)=>{
            this.isError = true;
            this.paises = [];
          }
      )
  }

  sugerencias(termino: string) {
    this.isError = false;
  }

}
