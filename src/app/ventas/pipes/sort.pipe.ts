import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(values: Array<any>, sortBy: string = 'Sin orden'): Array<any> {

        switch(sortBy) {
            case 'name':
                return values.sort((a,b) => (a.name > b.name) ? 1 : -1);
            case 'fliying':
                return values.sort((a,b) => (a.fliying > b.fliying) ? -1 : 1);
            case 'color':
                return values.sort((a,b) => (a.color > b.color) ? 1 : -1);
            default:
                return values;
        } 
    }
    
}