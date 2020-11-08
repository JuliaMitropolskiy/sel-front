import { Router, RoutesRecognized } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sel-front';

  isAuth: boolean;
  showAll: boolean;

  constructor(private authService: AuthService, private router: Router, private changeDetector: ChangeDetectorRef) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    console.log('hoy1 ', this.isAuth);

    this.isAuth = this.authService.getIsAuth();
    console.log('hoy2 ', this.isAuth);

    // tslint:disable-next-line: deprecation
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        if (event.state.root.firstChild.data['isSigninPage']) {
          this.isAuth = false;
          this.showAll = false;
          console.log('hru1 ', this.showAll);
        } else {
          this.isAuth = true;
          this.showAll = true;
          console.log('hru2 ', this.showAll);
        }
        this.changeDetector.detectChanges();
      }
    });

  }
}
