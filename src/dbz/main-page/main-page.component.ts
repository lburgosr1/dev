import { Component} from "@angular/core"
import { IPersonaje, Personaje } from '../personaje';

@Component({
    selector: "app-main-page",
    templateUrl: "./main-page.component.html",
})

export class MainPageComponent{

    personajes: IPersonaje[] = [
        {
            nombre: "Goku",
            poder: 15000
        },
        {
            nombre: "Vegeta",
            poder: 10000
        }
    ];

    personaje: Personaje = {
        nombre: "Maestro Rochi",
        poder: 1000
    }

    agregarPersonaje(personaje: Personaje){
        this.personajes.push(personaje);
    }

}