import { Offre, Category } from './../models/Offre.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) { }

  getAllOffres(): Observable<any> {
    return this.http.get('http://localhost:8081/offres');
  }

  createOffre(titre: string, text: string, userId: number, rubriqueId: number) {
    const body = { 'titre': titre, 'text': text, 'userId': userId, 'rubriqueId': rubriqueId };

    return this.http.post('http://localhost:8081/offres/new', body);
  }

  getCategories(): Observable<any> {
    return this.http.get('http://localhost:8081/categories');
  }

  getRubriques(categoryCode: number): Observable<any> {
    return this.http.get('http://localhost:8081/rubriques/' + categoryCode);
  }

  getOffresByUserId(userId: number): Observable<any> {
    return this.http.get('http://localhost:8081/offres/users/' + userId);
  }

}
