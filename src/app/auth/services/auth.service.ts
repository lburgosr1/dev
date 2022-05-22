import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private user: User;

  constructor(private http: HttpClient) { }

  verifyAuthentication(): Observable<boolean> {
    if(!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<User>(`${ this.baseUrl }/usuarios/1`)
            .pipe(
              map(auth => {
                this.user = auth;
                return true;
              })
            );
  }

  login() {
    return this.http.get<User>(`${ this.baseUrl }/usuarios/1`)
            .pipe(
              tap(res => { this.user = res; }),
              tap(res => { localStorage.setItem('token', res.id) })
            );
  }

  logout() {
    this.user = null;
    localStorage.removeItem('token');
  }

  get auth(): User {
    return {...this.user};
  }
}
