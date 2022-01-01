import { Component, EventEmitter, Input, Output} from "@angular/core"
import { IPersonaje, Personaje } from '../personaje';

@Component({
    selector: "app-agregar",
    templateUrl: "./agregar.component.html",
})

export class AgregarComponent{

    //personaje = {} as IPersonajes;
    @Input() personaje = new Personaje();

    @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


    agregar(): void{

        if(this.personaje.nombre.trim().length === 0){return;}

        this.onNuevoPersonaje.emit( this.personaje );

        this.personaje = new Personaje;
    }
    

}