import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayuscula: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  enMayusculas(): void {
    this.enMayuscula = !this.enMayuscula;
  }

}
