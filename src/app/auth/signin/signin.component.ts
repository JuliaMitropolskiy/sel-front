import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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

}
