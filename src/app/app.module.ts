import { EchangeService } from './services/echange.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AnnonceService } from './services/annonce.service';
import { OffreService } from './services/offre.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { OffreListComponent } from './offres/offre-list/offre-list.component';
import { OffreSeulComponent } from './offres/offre-seul/offre-seul.component';
import { AnnonceListComponent } from './annonces/annonce-list/annonce-list.component';
import { AnnonceSeulComponent } from './annonces/annonce-seul/annonce-seul.component';
import { OffreFormComponent } from './offres/offre-form/offre-form.component';
import { AnnonceFormComponent } from './annonces/annonce-form/annonce-form.component';
import { TransferMinutesComponent } from './echanges/transfer-minutes/transfer-minutes.component';
import { EchangeListComponent } from './echanges/echange-list/echange-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    OffreListComponent,
    OffreSeulComponent,
    AnnonceListComponent,
    AnnonceSeulComponent,
    OffreFormComponent,
    AnnonceFormComponent,
    TransferMinutesComponent,
    EchangeListComponent,
    HeaderComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    OffreService,
    AnnonceService,
    AuthGuardService,
    EchangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
