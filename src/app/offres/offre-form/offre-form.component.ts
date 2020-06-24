import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OffreService } from './../../services/offre.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre-form',
  templateUrl: './offre-form.component.html',
  styleUrls: ['./offre-form.component.css']
})
export class OffreFormComponent implements OnInit {

  offreForm: FormGroup;
  errorMessage: string;

  constructor(
    private offreService: OffreService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.offreForm = this.formBuilder.group({
      titre: ['', Validators.required],
      text: ['', Validators.required],
      rubrique: ['', Validators.required],
      photoLien: ''
    });
  }

  onSubmit(f) {
    const titre = this.offreForm.get('titre').value;
    const text = this.offreForm.get('text').value;
    const userId = JSON.parse(localStorage.getItem('current_user')).id;
    const rubrique = this.offreForm.get('rubrique').value;
    const photoLien = this.offreForm.get('photoLien').value;
    this.offreService.createOffre(titre, text, userId, rubrique).subscribe(
      () => {
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

}
