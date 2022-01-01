export interface IPersonaje {
    nombre: string,
    poder: number
}

export class Personaje implements IPersonaje {

    nombre: string;
    poder: number;

    constructor(){
        this.nombre = "";
        this.poder = null;
    }
}