import { User } from './../../models/User.model';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user1 = new User('Twain', 'sgn', 'twain1@toto.fr', 'titi000', 1000, null, 'Marc', '', null, null);

    this.authService.inscription(user1);
    console.log('piou');
  }

}
