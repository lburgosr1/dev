import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: Array<string> = ['asia', 'europe', 'americas', 'oceania', 'africa'];
  regionActiva: string = '';
  paises: Array<Country> = [];
  errorMessage: string = '';

  constructor(private paisService: PaisService) { }

  getRegion(region: string): void{

    this.paisService.getRegion(region).subscribe({
      
      next: (paises) => {
        this.paises = paises;
      },
      error: (err: string) => {
        this.errorMessage = err;
        console.log(this.errorMessage);
      }
      
    })

  }

  activarRegion(region: string) {
    
    if(region === this.regionActiva){
      return;
    }
    this.regionActiva = region;
    this.paises = [];

    this.getRegion(region);
  }

  getClassCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
