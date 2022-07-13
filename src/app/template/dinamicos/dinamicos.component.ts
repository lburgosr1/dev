import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: IFavorito[];
}

interface IFavorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Luis',
    favoritos: [
      {id: 1, nombre: 'Metal Gear'},
      {id: 2, nombre: 'Death Stranding'}
    ]
  }

  addFavorito() {
    const nuevoFavorito: IFavorito = {
      id: this.persona.favoritos.length + 1, 
      nombre: this.nuevoJuego
    };

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  guardar(fomr: any) {
    console.log(fomr);
  }

  eliminar(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }

}
