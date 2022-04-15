import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Luisa';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Miguel'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  cambiarNombre(): void {

    this.nombre = "Fernando";
    this.genero = 'masculino'; 

  }

  borrarCliente(): void {

    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Luis',
    edad: 25,
    direccion: 'Av. Los Proceres 27'
  }

  heroes = [
    {
      nombre: 'Superman',
      value: true
    },
    {
      nombre: 'Ronbin',
      value: false
    },
    {
      nombre: 'Aquaman',
      value: false
    }
  ];

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
