import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Offre, Category } from './../../models/Offre.model';
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
  categories: Category[];
  filtre: FormGroup;
  offresTous: Offre[];
  showCancel = false;
  rienTrouve = false;

  constructor(private formBuilder: FormBuilder, private offreService: OffreService) { }

  ngOnInit() {
    this.initFiltre();

    this.offres = [];
    this.offresTous = [];
    this.offreService.getAllOffres().subscribe(
      (result: any) => {
        this.offresTous = result;
        this.offres = this.offresTous;
        console.log('piou piou ', this.offres);
      },
      (error) => {
        console.log(error);
      }
    );

    this.offreService.getCategories().subscribe(
      (res) => {
        res.shift();
        this.categories = res;
        console.log(this.categories);
      },
      (error) => console.log(error, error.error.message)
    );

  }

  initFiltre() {
    this.filtre = this.formBuilder.group({ category: new FormControl() });
  }

  showOffers(event) {
    this.rienTrouve = false;
    this.offres = [];
    for (const offre of this.offresTous) {
      if (offre.rubrique.category.id === parseInt(event)) {
        this.offres.push(offre);
      }
    }
    if (this.offres.length === 0) {
      this.rienTrouve = true;
    }
    this.showCancel = true;
  }

  cancelFiltre() {
    this.offres = this.offresTous;
    this.showCancel = false;
    this.rienTrouve = false;
    this.initFiltre();
  }

}
