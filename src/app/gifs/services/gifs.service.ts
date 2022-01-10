import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  
  private apiKey: string = 'h3JITdaT13eujU82HNcWx7F36lmllWmD';
  private _historial: Array<string> = [];

  public resultados: Array<Gif> = [];
  public urlApi: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

    /* if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    } */
  }

  get historial(){
    return [...this._historial];
  }
  
  /* async */ searchGifs(query: string){

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('q', query)
          .set('limit', '10')

    query = query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http.get<SearchGifsResponse>(`${this.urlApi}/search`,{params})
    .subscribe( resp =>{
      this.resultados = resp.data;

      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    })



    /* fetch(`https://api.giphy.com/v1/gifs/search?api_key=h3JITdaT13eujU82HNcWx7F36lmllWmD&q=dragon ball`)
      .then(resp =>{
        resp.json().then(data =>{
          console.log(data);
        })
      }) */

      /*const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=h3JITdaT13eujU82HNcWx7F36lmllWmD&q=dragon ball');
      const data = await resp.json();

      console.log(data);*/
  }
}
