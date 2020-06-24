import { Offre } from './../models/Offre.model';
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

  createOffre(titre: string, text: string, userId: number, rubriqueId: string) {
    const body = { 'titre': titre, 'text': text, 'userId': userId, 'rubriqueId': rubriqueId };

    return this.http.post('http://localhost:8081/offres/new', body);
  }

}
