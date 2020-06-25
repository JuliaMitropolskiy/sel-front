import { User } from './../models/User.model';
import { OffreService } from './../services/offre.service';
import { Offre } from './../models/Offre.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  offres: Offre[];
  user: User;

  constructor(private offreService: OffreService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('current_user'));
    this.offres = [];
    this.offreService.getOffresByUserId(this.user.id).subscribe(
      (res) => {
        this.offres = res;
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

}
