import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors> {

    const email = control.value;
    
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
          .pipe(
            map(resp => {
              delay(3000)
              return (resp.length === 0)
                     ? null
                     : {emailTaken: true}
            })
          );
  }
}
