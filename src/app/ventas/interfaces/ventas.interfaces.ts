export enum Color {
    rojo, 
    negro, 
    azul, 
    verde
}

export interface Heroe {
    name: string;
    fliying: boolean;
    color: Color;
}