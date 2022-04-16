import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  capitalLetters: boolean = false;
  sortBy: string;

  heroes: Array<Heroe> = [
    {
      name: 'Superman',
      fliying: true,
      color: Color.azul
    },
    {
      name: 'Batman',
      fliying: false,
      color: Color.negro
    },
    {
      name: 'Robin',
      fliying: false,
      color: Color.verde
    },
    {
      name: 'Daredevil',
      fliying: false,
      color: Color.rojo
    },
    {
      name: 'Linterna Verde',
      fliying: true,
      color: Color.verde
    }
  ];

  inCapitalLetters(): void {
    this.capitalLetters = !this.capitalLetters;
  }

  changeSort(value: string): void {
    this.sortBy = value;
  }
}
