import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'luis';
  nombreUpper: string = 'LUIS';
  nombreCompleto: string = 'lUis BurGos';

  //filterargs = {title: 'hello'};
  items = {arg: [{title: 'hello world'}, {title: 'hello kitty'}, {title: 'foo bar'}]};

  fecha: Date = new Date();
}
