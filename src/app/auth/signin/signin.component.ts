import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('f', null) f: NgForm;
  @ViewChild('signUpPanel', null) signUpPanel: MatExpansionPanel;
  @ViewChild('signInPanel', null) signInPanel: MatExpansionPanel;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f.password);
    this.authService.connexion(f.login, f.password).subscribe(
      () => {
        this.router.navigateByUrl('accueil');
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  signUpFinished(event) {
    this.signUpPanel.close();
    this.signInPanel.open();
    this.f.controls['login'].setValue(event);
  }

}
