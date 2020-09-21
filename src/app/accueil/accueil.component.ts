import { AuthService } from './../services/auth.service';
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
  user: any;

  constructor(private offreService: OffreService, private authService: AuthService) { }

  ngOnInit() {
    // this.user = JSON.parse(localStorage.getItem('current_user'));
    this.offres = [];
    this.user = new User('', '', '', '', 0);
    this.authService.getUserById(parseInt(localStorage.getItem('id'))).subscribe(
      (res) => {
        this.user = res;
        this.offreService.getOffresByUserId(this.user.id).subscribe(
          (result) => {
            this.offres = result;
          },
          (error) => {
            console.log(error.error.message);
          }
        );
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

}
