import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '.././interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient) { }

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  searchCountry(termino: string ): Observable<Array<Country>>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get(url, { params: this.httpParams}) as Observable<Array<Country>>;
  }

  searchCapital(termino: string): Observable<Array<Country>> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get(url, { params: this.httpParams}) as Observable<Array<Country>>;
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get(url) as Observable<Country>;
  }

  getRegion(region: string): Observable<Array<Country>> {

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get(url, { params: this.httpParams}) as Observable<Array<Country>>;
  }
}
