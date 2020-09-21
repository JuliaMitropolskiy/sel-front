import { User } from './../models/User.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor(private http: HttpClient) { }

  inscription(user: User) {
    return this.http
      .post('http://localhost:8081/users/inscription', user);
  }

  connexion(login: string, password: string) {
    const headers: HttpHeaders = new HttpHeaders({ login, password });
    return this.http
      .get('http://localhost:8081/users/connexion', { headers })
      .pipe(
        tap(user => {
          console.log(user);
          this.setSession(user);
        }));
  }

  setSession(user) {
    localStorage.setItem('current_user', JSON.stringify(user));
    localStorage.setItem('id', user.id);
    this.isAuth = true;
  }

  getUserById(id: number) {
    return this.http.get('http://localhost:8081/users/' + id);
  }

}
