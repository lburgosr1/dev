import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: []
})
export class VerPaisComponent implements OnInit {

  pais: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap((param) => this.paisService.getPaisPorAlpha(param.id))
    )
    .subscribe( pais => {
      console.log(pais);
      this.pais = pais;

    });

    /* this.activateRoute.params.subscribe( ({id}) => {
      console.log(id);

      this.paisService.getPaisPorAlpha(id).subscribe(pais =>{
        console.log(pais);
      });

    }); */
  }

}
