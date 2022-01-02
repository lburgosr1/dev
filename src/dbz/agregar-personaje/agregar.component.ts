import { Component, Input } from "@angular/core"
import { Personaje } from '../personaje';
import { DbzService } from "../services/dbz.service";

@Component({
    selector: "app-agregar",
    templateUrl: "./agregar.component.html",
})
export class AgregarComponent {

    constructor(private dbzService: DbzService) { }
    //personaje = {} as IPersonajes;
    @Input() personaje = new Personaje();

    //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


    agregar(): void {

        if (this.personaje.nombre.trim().length === 0) { return; }

        //this.onNuevoPersonaje.emit( this.personaje );

        this.dbzService.agregarPersonaje(this.personaje);

        this.personaje = new Personaje;
    }


}