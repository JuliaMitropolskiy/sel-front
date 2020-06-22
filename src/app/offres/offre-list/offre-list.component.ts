import { Offre } from './../../models/Offre.model';
import { OffreService } from '../../services/offre.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.css']
})
export class OffreListComponent implements OnInit {

  offres: Offre[];

  constructor(private offreService: OffreService) { }

  ngOnInit() {
    console.log(localStorage.getItem('current_user'));
    this.offreService.getAllOffres().subscribe(
      (result: any) => {
        console.log(result);
        this.offres = result;
        console.log('piou piou ', this.offres);
      },
      (error) => {
        console.log(error);
        this.offres = [];
      }
    );
  }

}