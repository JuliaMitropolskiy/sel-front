import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { EchangeService } from './../../services/echange.service';
import { User } from './../../models/User.model';
import { Echange } from './../../models/Echange.model';
import { AuthService } from './../../services/auth.service';
import { Category } from './../../models/Offre.model';
import { OffreService } from './../../services/offre.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-minutes',
  templateUrl: './transfer-minutes.component.html',
  styleUrls: ['./transfer-minutes.component.css']
})
export class TransferMinutesComponent implements OnInit {

  transferForm: FormGroup;
  categories: Category[];
  errorMessage: string;
  users: User[];

  constructor(
    private formBuilder: FormBuilder,
    private offreService: OffreService,
    private authService: AuthService,
    private echangeService: EchangeService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.getUsers();
    this.offreService.getCategories().subscribe(
      (res) => {
        const tab = [];
        for (const r of res) {
          const category = new Category(r.id, r.libelle);
          tab.push(category);
        }
        this.categories = tab;
      },
      (error) => console.log(error, error.error.message)
    );

  }

  initForm() {
    this.transferForm = this.formBuilder.group({
      category: ['', Validators.required],
      date: ['', Validators.required],
      minutes: ['', Validators.required],
      beneficiaire: ['', Validators.required],
      message: ''
    });
  }

  onSubmit(f) {

    const idBeneficiaire = f.beneficiaire;
    const dateEchange = f.date;
    const categoryId = parseInt(f.category);
    // let category;
    // for (const c of this.categories) {
    //   if (c.id === categoryId) {
    //     category = c;
    //   }
    // }
    const index = parseInt(f.category);
    console.log("ind ", index);
    const category = this.categories[index];
    console.log("categ ", category);
    const minutes = f.minutes;
    const message = f.message;
    const emetteur = JSON.parse(localStorage.getItem('current_user'));
    this.authService.getUserById(idBeneficiaire).subscribe(
      (res) => {
        const beneficiaire = res;
        this.echangeService.createEchange(emetteur, beneficiaire, dateEchange, category, minutes, message).subscribe(
          () => this.router.navigate(['accueil']),
          (error) => console.log(error.error.message)
        );
      }
    );

  }

  getUsers() {
    this.userService.getAll().subscribe(
      (res) => {
        console.log(res);
        const tab = [];
        for (const key of Object.keys(res)) {
          const user = res[key];
          const newUser = new User(user.nom, user.commune, user.mail, user.password, user.soldeMinutes, user.id, user.prenom);
          tab.push(newUser);
        }
        this.users = tab;
      }
    );
  }

}
