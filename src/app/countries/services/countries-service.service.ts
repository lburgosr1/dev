import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIURL } from '../common/api-url';
import { ICountrie, ICountrieSmall } from '../interfaces/countrie.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string = environment.url;
  private _regions: Array<string> = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  constructor(private http: HttpClient) { }

  getCountriesForRegion(region: string): Observable<Array<ICountrieSmall>> {
   return this.http.get<Array<ICountrieSmall>>(`${this.baseUrl}/${APIURL.version}/${APIURL.getCountrieSmall}/${region}?fields=name,cca3,latlng`);
  }

  getCountriesForCode(code: string): Observable<ICountrie> {
    if(!code) {
      return of({} as ICountrie);
    }
    return this.http.get<ICountrie>(`${this.baseUrl}/${APIURL.version}/${APIURL.getCountries}/${code}`);
  }

  getCountriesForCodeSmall(code: string): Observable<ICountrieSmall> {

    if(!code) {
      return of({} as ICountrieSmall);
    }
    return this.http.get<ICountrie>(`${this.baseUrl}/${APIURL.version}/${APIURL.getCountries}/${code}?fields=name,cca3,latlng`);

  }

  getCountriesBorders(borders: Array<string>): Observable<Array<ICountrieSmall>> {

    if(!borders) {
      return of({} as Array<ICountrieSmall>);
    }

    const requests: Observable<ICountrieSmall>[] = [];

    borders.forEach(codigo => {
      const request = this.getCountriesForCodeSmall(codigo);
      requests.push(request)
    });

    return combineLatest(requests);
  }

  get regions() {
    return [...this._regions];
  }

}
