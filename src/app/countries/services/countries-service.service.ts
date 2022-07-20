import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIURL } from '../common/api-url';
import { Countrie, CountrieSmall } from '../interfaces/countrie.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string = environment.url;
  private _regions: Array<string> = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  constructor(private http: HttpClient) { }

  getCountriesForRegion(region: string): Observable<Array<CountrieSmall>> {
   return this.http.get<Array<CountrieSmall>>(`${this.baseUrl}/${APIURL.version}/${APIURL.getCountrieSmall}/${region}?fields=name,cca3,latlng`);
  }

  getCountriesForCode(code: string): Observable<Countrie> {
    if(!code) {
      return of({} as Countrie);
    }
    return this.http.get<Countrie>(`${this.baseUrl}/${APIURL.version}/${APIURL.getCountries}/${code}`);
  }

  getCountriesForCodeSmall(code: string): Observable<CountrieSmall> {

    if(!code) {
      return of({} as CountrieSmall);
    }
    return this.http.get<Countrie>(`${this.baseUrl}/${APIURL.version}/${APIURL.getCountries}/${code}?fields=name,cca3,latlng`);

  }

  getCountriesBorders(borders: Array<string>): Observable<Array<CountrieSmall>> {

    if(!borders) {
      return of({} as Array<CountrieSmall>);
    }

    const requests: Observable<CountrieSmall>[] = [];

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
