import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fliying'
})

export class FliyingPipe implements PipeTransform {

    transform(value: boolean): string {
        return value ? 'vuela' : 'no vuela';
    }

}