import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { User } from './../../models/User.model';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;
  @Output() signUpFinished = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private notifier: NotifierService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: '',
      adresse: '',
      commune: ['', Validators.required],
      telephone: '',
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

      // password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const nom = this.signupForm.get('nom').value;
    const prenom = this.signupForm.get('prenom').value;
    const adresse = this.signupForm.get('adresse').value;
    const commune = this.signupForm.get('commune').value;
    const numTel = this.signupForm.get('telephone').value;
    const mail = this.signupForm.get('mail').value;
    const password = this.signupForm.get('password').value;
    const newUser = new User(nom, commune, mail, password, 1000, undefined, prenom, adresse, numTel);

    this.authService.inscription(newUser)
      .subscribe(
        () => {
          console.log('L\'inscription reussi');
          this.initForm();
          this.notifier.notify('success', 'Votre compte a été créé. Vous pouvez vous connecter.');
          this.signUpFinished.emit(mail);
        },
        (error) => {
          console.log(error.error.message);
        }
      );

  }
}
