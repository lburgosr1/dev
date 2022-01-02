import { Injectable } from '@angular/core'
import { IPersonaje, Personaje } from '../personaje';

@Injectable()
export class DbzService {

    constructor() { }

    private _personajes: Array<IPersonaje> = [
        {
            nombre: "Goku",
            poder: 15000
        },
        {
            nombre: "Vegeta",
            poder: 10000
        }
    ];

    get personajes(): Array<IPersonaje> {
        return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}