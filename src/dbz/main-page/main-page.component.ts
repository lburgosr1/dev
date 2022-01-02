import { Component } from "@angular/core"
import { Personaje } from '../personaje';

@Component({
    selector: "app-main-page",
    templateUrl: "./main-page.component.html",
})
export class MainPageComponent {

    constructor() { }

    personaje: Personaje = {
        nombre: "Maestro Rochi",
        poder: 1000
    }

    /* agregarPersonaje(personaje: Personaje){
        this.personajes.push(personaje);
    } */
}