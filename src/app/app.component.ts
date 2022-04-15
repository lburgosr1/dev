import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeApp';

  num: number = 1000;
  nombre: string = "luiS bUrGos";

  obj = {
    nombre: 'Luis Burgos'
  };

  mostrarNombre(): void{

  }
}
