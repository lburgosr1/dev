import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IChart } from '../interfaces/chart';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private url: string = 'http://localhost:3000/grafica';

  constructor(private http: HttpClient) { }

  getData(): Observable<IChart> {
    return this.http.get<IChart>(this.url);
  }

  getDataFormate() {
    return this.getData()
      .pipe(
        map(data => {
          const values: number[] = Object.values(data);
          const labels: string[] = Object.keys(data);
          
          return {
            labels: labels,
            values: values
          } as IChart;
        })
      );
  }
}
