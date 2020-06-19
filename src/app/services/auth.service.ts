import { User } from './../models/User.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  inscription(user: User) {
    this.http
      .post('http://localhost:8081/users/inscription', user)
      .subscribe(
        () => {
          console.log('L\'inscription reussi');
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }

  connexion(login: string, password: string) {
    const headers: HttpHeaders = new HttpHeaders({ login: login, password: password });
    return this.http
      .get('http://localhost:8081/users/connexion', { headers: headers })
      .pipe(
        tap(user => {
          console.log(user);
          this.setSession(user);
        }));
  }

  setSession(user) {
    localStorage.setItem('current_user', JSON.stringify(user));
  }

}
