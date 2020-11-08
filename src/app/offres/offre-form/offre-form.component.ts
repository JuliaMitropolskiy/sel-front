import { Rubrique, Category } from './../../models/Offre.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OffreService } from './../../services/offre.service';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-offre-form',
  templateUrl: './offre-form.component.html',
  styleUrls: ['./offre-form.component.css']
})
export class OffreFormComponent implements OnInit {

  offreForm: FormGroup;
  errorMessage: string;
  categories: Category[];
  rubriques: Rubrique[];
  sending = false;

  constructor(
    private offreService: OffreService,
    private formBuilder: FormBuilder,
    private notifier: NotifierService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.offreService.getCategories().subscribe(
      (res) => {
        res.shift();
        this.categories = res;
        console.log(this.categories);
      },
      (error) => console.log(error, error.error.message)
    );
  }

  initForm() {
    this.offreForm = this.formBuilder.group({
      titre: ['', Validators.required],
      text: ['', Validators.required],
      category: ['', Validators.required],
      rubrique: ['', Validators.required]
      // photoLien: ''
    });
  }

  onSubmit(f) {
    this.sending = true;
    const titre = f.titre;
    const text = f.text;
    const userId = parseInt(localStorage.getItem('id'));
    const rubrique = f.rubrique;
    // const photoLien = f.photoLien;
    this.offreService.createOffre(titre, text, userId, rubrique).subscribe(
      () => {
        this.notifier.notify('success', 'Votre offre a été ajoutée.');
        this.router.navigate(['offres']);
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  annuler() {
    this.router.navigate(['offres']);
  }

  getRubriques(categoryId) {
    console.log(categoryId);
    this.offreService.getRubriques(categoryId).subscribe(
      (res) => {
        this.rubriques = res;
      }
    );
  }

}
