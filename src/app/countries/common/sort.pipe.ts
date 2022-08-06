import { Pipe, PipeTransform } from '@angular/core';
import { ICountrieSmall } from '../interfaces/countrie.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(values: ICountrieSmall[], ...args: unknown[]): unknown {

    return values.sort((a,b) => {

      if (a.name.common > b.name.common) {
        return 1;
      }
      if (a.name.common < b.name.common) {
        return -1;
      }

      return 0;

    });
  }
}
