import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string;
  isError: boolean = false;
  paises: Array<Country>;
  paisesSugeridos: Array<Country>;
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.searchCountry(termino).subscribe({
      next: (rest) => {
        this.paises = rest;
      },
      error: (err) => {
        this.isError = true;
        this.paises = [];
      }
    })
  }

  sugerencias(termino: string) {
    this.isError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    if(termino === "") this.mostrarSugerencias = false;

    this.paisService.searchCountry(termino).subscribe({
      next: (rest)=>{
        this.paisesSugeridos = rest.splice(0,5);
      },
      error: (err)=>{
        this.paisesSugeridos = [];
      }
    })
  }

}
