import { Component, Input } from "@angular/core";
import { IPersonaje } from '../personaje';


@Component({
    selector: "app-personajes",
    templateUrl: "./personajes.html",
})
export class PersonajesComponent{

   @Input() personajes: IPersonaje [] = [];

}