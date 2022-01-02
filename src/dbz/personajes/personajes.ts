import { Component, Input } from "@angular/core";
import { DbzService } from "../services/dbz.service";

@Component({
    selector: "app-personajes",
    templateUrl: "./personajes.html",
})
export class PersonajesComponent {

    //@Input() personajes: Array<IPersonaje> = [];

    constructor(private dbzService: DbzService) { }

    get personajes() {
        return this.dbzService.personajes;
    }
}