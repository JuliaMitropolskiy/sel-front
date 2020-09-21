import { Category } from './../models/Offre.model';
import { User } from './../models/User.model';
import { Echange } from './../models/Echange.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EchangeService {

  constructor(private http: HttpClient) { }

  createEchange(emetteur: User, beneficiaire: any, dateEchange: Date, category: Category, minutes: number,
    message: string): Observable<any> {
    const echange = new Echange(null, emetteur, beneficiaire, dateEchange, category, minutes, message);
    console.log('echa ', echange);
    return this.http.post('http://localhost:8081/echanges/new', echange);
  }

}
