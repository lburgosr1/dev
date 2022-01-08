import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar: ElementRef<HTMLInputElement>;

  constructor(private gifsServices: GifsService) { }

  ngOnInit(): void {
    
  }

  search(){

    const value: string = this.txtBuscar.nativeElement.value;

    if(value && (value.trim().length == value.length)){

      this.gifsServices.searchGifs(value);

      this.txtBuscar.nativeElement.value = "";
    }
  }
}
