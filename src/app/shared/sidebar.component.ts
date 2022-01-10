import { Component } from "@angular/core";

import { GifsService } from '../gifs/services/gifs.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
    
    constructor(private gifsService: GifsService){}

    search(term: string){
        this.gifsService.searchGifs(term);
    }

    get historial(){
        return this.gifsService.historial;
    }
}