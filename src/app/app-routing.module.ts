import { AccueilComponent } from './accueil/accueil.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TransferMinutesComponent } from './echanges/transfer-minutes/transfer-minutes.component';
import { AnnonceSeulComponent } from './annonces/annonce-seul/annonce-seul.component';
import { AnnonceFormComponent } from './annonces/annonce-form/annonce-form.component';
import { AnnonceListComponent } from './annonces/annonce-list/annonce-list.component';
import { OffreSeulComponent } from './offres/offre-seul/offre-seul.component';
import { OffreFormComponent } from './offres/offre-form/offre-form.component';
import { OffreListComponent } from './offres/offre-list/offre-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'accueil', canActivate: [AuthGuardService], component: AccueilComponent },
  { path: 'offres', canActivate: [AuthGuardService], component: OffreListComponent },
  { path: 'offres/new', canActivate: [AuthGuardService], component: OffreFormComponent },
  { path: 'offres/view/:id', canActivate: [AuthGuardService], component: OffreSeulComponent },
  { path: 'annonces', canActivate: [AuthGuardService], component: AnnonceListComponent },
  { path: 'annonces/new', canActivate: [AuthGuardService], component: AnnonceFormComponent },
  { path: 'annonces/view/:id', canActivate: [AuthGuardService], component: AnnonceSeulComponent },
  { path: 'transfer-minutes', canActivate: [AuthGuardService], component: TransferMinutesComponent },
  { path: '', component: SigninComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
