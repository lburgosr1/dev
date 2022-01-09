import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'h3JITdaT13eujU82HNcWx7F36lmllWmD';
  private _historial: Array<string> = [];

  public resultados: Array<any> = [];

  constructor( private http: HttpClient ) { }

  get historial(){
    return [...this._historial];
  }
  
  /* async */ searchGifs(query: string){

    query = query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=h3JITdaT13eujU82HNcWx7F36lmllWmD&q=${query}`)
    .subscribe( (resp: any) =>{
      this.resultados = resp.data;
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
